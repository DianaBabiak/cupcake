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

export type CurrencyPairRates = {
    [pair: string]: number
}

export interface MarketData {
    marketName: string
    rates: CurrencyPairRates
    timestamp: number
    date: string
}

const data = {
[CurrencyPair.RUB_CUPCAKE]: [{first: 2.3}, {second:2.4}, {third:2.4}],
}

const data2 = [
    {
        id: 1,
        pair: "RUB/CUPCAKE",
        market:{
            first: 1.22,
            second: 1.25,
            third: 1.22,
        }
    }
]

const data3 = {
    first:[{[CurrencyPair.RUB_CUPCAKE]:1.23}]
}