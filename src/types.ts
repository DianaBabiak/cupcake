export interface Rates {
    RUB: number
    USD: number
    EUR: number
}

export interface GetRatesResponse  {
    rates: Rates
    base: string
    timestamp: number
    date: string
}

export enum CurrencyPair {
    RUB_CUPCAKE = 'RUB/CUPCAKE',
    USD_CUPCAKE = 'USD/CUPCAKE',
    EUR_CUPCAKE = 'EUR/CUPCAKE',
    RUB_USD = 'RUB/USD',
    RUB_EUR = 'RUB/EUR',
    EUR_USD = 'EUR/USD',
}

export interface CurrencyPairRates {
    [pair: string]: number
}

export enum Market {
    first='first',
    second='second',
    third='third',
}

export type MarketRates = Record<CurrencyPair, number>

export type State = Record<Market, MarketRates>