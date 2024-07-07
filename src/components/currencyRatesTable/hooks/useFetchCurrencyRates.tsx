import {useEffect, useMemo, useState} from "react";
import {Markets, State} from "../../../types.ts";
import {getInitialState} from "../utils/getInitialState.ts";
import {marketAPI} from "../../../api/marketAPI.ts";
import {
    convertRatesToCurrencyPairRates
} from "../utils/convertRatesToCurrencyPairRates.ts";
import {controller} from "../../../api/constants.ts";

export const useFetchCurrencyRates = () => {
    const [state, setState] = useState<State>(()=> getInitialState())

    const longPoll = async (market:Markets) => {

        try {
            const {rates} = await marketAPI.getActualMarketCurrencyRates(market)
            const currencyPairRates = convertRatesToCurrencyPairRates(rates)

            setState((prevState)=>({...prevState, [market]:currencyPairRates}))
        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
                longPoll(market);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                Object.values(Markets).forEach(market=> {
                    marketAPI.getInitialMarketCurrencyRates(market)
                        .then(({rates})=> {
                            const currencyPairRates = convertRatesToCurrencyPairRates(rates)

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
            controller.abort()
        }
    }, [])

    return useMemo(()=> ({state}), [state])
}