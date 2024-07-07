import {GetMarketCurrencyRatesResponse} from "../../types.ts";
import {controller} from "../constants.ts";

export const fetchData = async (url: string): Promise<GetMarketCurrencyRatesResponse> => {
    const signal = controller.signal
    const response = await fetch(url,{signal})

    if (!response.ok) {
        throw new Error('Network response error')
    }

    return (await response.json() as Promise<GetMarketCurrencyRatesResponse>)
}