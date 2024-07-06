import {CurrencyPair, CurrencyPairRates, Market, MarketRates, Rates, State} from "../../types.ts";

const createMarketRates = (): MarketRates => {
    return Object.values(CurrencyPair).reduce((acc, pair) => {
        acc[pair] = 0
        return acc
    }, {} as MarketRates)
}

export const createInitialState = (): State => {
    return Object.values(Market).reduce((acc, market) => {
        acc[market] = createMarketRates()
        return acc
    }, {} as State)
}

export const createValueCurrency = (state:State, currency:CurrencyPair): CurrencyPairRates => {
    return Object.values(Market).reduce((acc, market) => {
        acc[market] = state[market][currency]
        return acc
    }, {} as CurrencyPairRates)
}

export const convertRatesToCurrencyPairRates = (rates: Rates): CurrencyPairRates => {
    return {
        [CurrencyPair.RUB_CUPCAKE]: rates.RUB,
        [CurrencyPair.USD_CUPCAKE]: rates.USD,
        [CurrencyPair.EUR_CUPCAKE]: rates.EUR,
        [CurrencyPair.RUB_USD]: rates.RUB / rates.USD,
        [CurrencyPair.RUB_EUR]: rates.RUB / rates.EUR,
        [CurrencyPair.EUR_USD]: rates.EUR / rates.USD,
    };
}





