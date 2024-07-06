import {GetRatesResponse, Market} from "../types.ts";
import {fetchState} from "./utils.ts";

export const marketAPI = {
    getInitialCurrency (market: Market): Promise<GetRatesResponse> {
        return fetchState(`http://localhost:3000/api/v1/${market}`);
    },

    getNewCurrency(market: Market): Promise<GetRatesResponse> {
        return fetchState(`http://localhost:3000/api/v1/${market}/poll`);
    },
}