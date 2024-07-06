import {CurrencyPair, CurrencyPairRates, Rates} from "../../types.ts";

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

