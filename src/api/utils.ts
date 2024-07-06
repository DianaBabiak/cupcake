import {GetRatesResponse} from "../types.ts";

export const fetchState = async (url: string): Promise<GetRatesResponse> => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return (await response.json() as Promise<GetRatesResponse>)
}