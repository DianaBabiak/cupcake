import {Markets, State} from "../../../types.ts";
import {createCurrencyRates} from "./createCurrencyRates.ts";

export const getInitialState = (): State => {
    return Object.values(Markets).reduce((acc, market) => {
        acc[market] = createCurrencyRates()
        return acc
    }, {} as State)
}