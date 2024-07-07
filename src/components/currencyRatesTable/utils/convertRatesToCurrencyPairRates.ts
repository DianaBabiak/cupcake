import {CurrencyPairRates, CurrencyPairs, Rates} from "../../../types.ts";

export const convertRatesToCurrencyPairRates = (rates: Rates): CurrencyPairRates => {
    return {
        [CurrencyPairs.RUB_CUPCAKE]: rates.RUB,
        [CurrencyPairs.USD_CUPCAKE]: rates.USD,
        [CurrencyPairs.EUR_CUPCAKE]: rates.EUR,
        [CurrencyPairs.RUB_USD]: rates.RUB / rates.USD,
        [CurrencyPairs.RUB_EUR]: rates.RUB / rates.EUR,
        [CurrencyPairs.EUR_USD]: rates.EUR / rates.USD,
    };
}