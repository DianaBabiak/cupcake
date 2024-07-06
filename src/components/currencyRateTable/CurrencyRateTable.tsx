import {Table} from "../ui/table/Table.tsx";
import {TableBody} from "../ui/table/tableBody/TableBody.tsx";
import {CurrencyRateHeadTable} from "../currencyRateHeadTable/CurrencyRateHeadTable.tsx";
import {CurrencyRateRowTable} from "../currencyRateRowTable/CurrencyRateRowTable.tsx";
import {useEffect, useRef} from "react";
import {marketAPI} from "../../api/marketAPI.ts";
import {Market} from "../../types.ts";

export const CurrencyRateTable = ()=>{
    const isPollingActiveRef = useRef<boolean>(true)

    const data = [
        {
            id: 1,
            pair: "RUB/CUPCAKE",
            first: 1.22,
            second: 1.25,
            third: 1.22,
        },
        {
            id: 2,
            pair: "USD/CUPCAKE",
            first: 1.51,
            second: 1.56,
            third: 1.56,
        },
        {
            id: 3,
            pair: "EUR/CUPCAKE",
            first: 1.89,
            second: 1.89,
            third: 1.89,
        },
        {
            id: 4,
            pair: "RUB/USD",
            first: 1.789,
            second: 1.769,
            third: 1.789,
        },
        {
            id: 5,
            pair: "RUB/EUR",
            first: 1.45,
            second: 1.45,
            third: 1.1,
        },
        {
            id: 6,
            pair: "EUR/USD",
            first: 1.345,
            second: 1.345,
            third: 1.345,
        },
    ]

    const longPoll = async (market:Market) => {
        if (!isPollingActiveRef) return

        try {
            console.log('start long pol', market)
            const response = await marketAPI.getNewCurrency(market)
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
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                Object.values(Market).forEach(market=> {
                    marketAPI.getInitialCurrency(market)
                        .then((response)=> {
                        console.log(`initial response ${market}`, response)
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
            <CurrencyRateHeadTable/>
            <TableBody>
                {data?.map(item => (
                    <CurrencyRateRowTable item={item} key={item.id} />
                ))}
            </TableBody>
        </Table>
    )
}