import {GetMarketCurrencyRatesResponse, Markets} from "../types.ts";
import {fetchData} from "./utils/fetchData.ts";
import {BASE_URL} from "./constants.ts";

export const marketAPI = {
    getInitialMarketCurrencyRates(market: Markets): Promise<GetMarketCurrencyRatesResponse> {
        return fetchData(`${BASE_URL}${market}`);
    },

    getActualMarketCurrencyRates(market: Markets): Promise<GetMarketCurrencyRatesResponse> {
        return fetchData(`${BASE_URL}${market}/poll`);
    },
}