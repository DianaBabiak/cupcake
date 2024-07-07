import {CurrencyRateMapByMarket} from "../../../../../types.ts";

export const getMinCurrencyRateForAllMarkets = (currencyRateValueMapByMarket: CurrencyRateMapByMarket): number | null => {
    const currencyRateValues = Object.values(currencyRateValueMapByMarket)
    const minCurrencyRateValue = Math.min(...currencyRateValues)

    const isAllCurrencyValuesEqual = currencyRateValues.every(element => element === currencyRateValues[0])

    return isAllCurrencyValuesEqual ? null : minCurrencyRateValue
}