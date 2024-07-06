import {Table} from "../ui/table/Table.tsx";
import {TableBody} from "../ui/table/tableBody/TableBody.tsx";
import {CurrencyRateHeadTable} from "../currencyRateHeadTable/CurrencyRateHeadTable.tsx";
import {CurrencyRateRowTable} from "../currencyRateRowTable/CurrencyRateRowTable.tsx";
import {useEffect, useRef, useState} from "react";
import {marketAPI} from "../../api/marketAPI.ts";
import {CurrencyPair, Market, State} from "../../types.ts";
import {convertRatesToCurrencyPairRates, createInitialState} from "./utils.ts";

export const CurrencyRateTable = ()=>{
    const isPollingActiveRef = useRef<boolean>(true)

    const headerRow = ['Pair name / market', ...Object.values(Market)]
    const rows = Object.values(CurrencyPair)
    const initialState: State = createInitialState()
    const [state, setState] = useState<State>(initialState)

    const longPoll = async (market:Market) => {
        if (!isPollingActiveRef) return

        try {
            console.log('start long pol', market)
            const response = await marketAPI.getNewCurrency(market)
            const currencyPairRates = convertRatesToCurrencyPairRates(response.rates)
            setState((prevState)=>({...prevState, [market]:currencyPairRates}))
            console.log(`result long pul ${market}`, response);

        } catch (error) {
            console.error('Fetch error:', error);
            isPollingActiveRef.current = true
        } finally {
            if (isPollingActiveRef.current) {
                longPoll(market);
            }
        }
    }

    const stopLongPolling = () => {
        isPollingActiveRef.current = false;
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                Object.values(Market).forEach(market=> {
                    marketAPI.getInitialCurrency(market)
                        .then((response)=> {
                            const currencyPairRates = convertRatesToCurrencyPairRates(response.rates)
                            setState((prevState)=>({...prevState, [market]:currencyPairRates}))
                            longPoll(market)
                    })
                })
            } catch (error) {
                console.error('Fetch error:', error)
            }
        }
        fetchData()

        return () => {
            stopLongPolling()
        }
    }, [])


    return (
        <Table>
            <CurrencyRateHeadTable headerRow={headerRow}/>
            <TableBody>
                {rows.map(currency => (
                    <CurrencyRateRowTable state={state} key={currency} currency={currency}/>
                ))}
            </TableBody>
        </Table>
    )
}