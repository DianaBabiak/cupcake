export interface Rates {
    RUB: number
    USD: number
    EUR: number
}

export interface GetMarketCurrencyRatesResponse {
    rates: Rates
    base: string
    timestamp: number
    date: string
}

export enum CurrencyPairs {
    RUB_CUPCAKE = 'RUB/CUPCAKE',
    USD_CUPCAKE = 'USD/CUPCAKE',
    EUR_CUPCAKE = 'EUR/CUPCAKE',
    RUB_USD = 'RUB/USD',
    RUB_EUR = 'RUB/EUR',
    EUR_USD = 'EUR/USD',
}

export enum Markets {
    First='First',
    Second='Second',
    Third='Third',
}

export type CurrencyPairRates = Record<CurrencyPairs, number>
export type CurrencyRateMapByMarket = Record<Markets, number>

export type State = Record<Markets, CurrencyPairRates>