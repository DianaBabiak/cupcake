import {CurrencyPairs, CurrencyRateMapByMarket, Markets, State} from "../../../types.ts";

export const getCurrencyRateMapByMarket = (state: State, currency: CurrencyPairs): CurrencyRateMapByMarket => {
    return Object.values(Markets).reduce((acc, market) => {
        acc[market] = state[market][currency]
        return acc
    }, {} as CurrencyRateMapByMarket)
}