import {useContext} from "react";
import {CurrencyContext} from "../contexts/CurrencyContext.tsx";

export const useCurrencyContext = () => {
    const context = useContext(CurrencyContext)
    if (!context) {
        throw new Error('useCurrencyContext must be used within a CurrencyProvider')
    }

    return context
}