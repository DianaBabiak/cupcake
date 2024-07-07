import {useEffect} from "react";
import {Markets} from "../../../types.ts";
import {marketAPI} from "../../../api/marketAPI.ts";
import {convertRatesToCurrencyPairRates} from "../utils/convertRatesToCurrencyPairRates.ts";
import {controller} from "../../../api/constants.ts";

import {useCurrencyContext} from "./useCurrencyContext.tsx";

export const useFetchCurrencyRates = () => {
    const {setState} = useCurrencyContext()

    const longPoll = async (market: Markets) => {

        try {
            const {rates} = await marketAPI.getActualMarketCurrencyRates(market)
            const currencyPairRates = convertRatesToCurrencyPairRates(rates)

            setState((prevState) => ({...prevState, [market]: currencyPairRates}))
        } catch (error) {
            console.error('Fetch error:', error)
        } finally {
            longPoll(market)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                Object.values(Markets).forEach(market => {
                    marketAPI.getInitialMarketCurrencyRates(market)
                        .then(({rates}) => {
                            const currencyPairRates = convertRatesToCurrencyPairRates(rates)

                            setState((prevState) => ({...prevState, [market]: currencyPairRates}))
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
}