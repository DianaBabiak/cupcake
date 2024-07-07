import {CurrencyPairRates, CurrencyPairs} from "../../../types.ts";

export const createCurrencyRates = (): CurrencyPairRates => {
    return Object.values(CurrencyPairs).reduce((acc, currencyPair) => {
        acc[currencyPair] = 0
        return acc
    }, {} as CurrencyPairRates)
}