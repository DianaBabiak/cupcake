import React, {createContext, Dispatch, PropsWithChildren, useState} from 'react';
import {State} from "../../../types.ts";
import {getInitialState} from "../utils/getInitialState.ts";

export interface CurrencyContextType {
    state: State;
    setState: Dispatch<React.SetStateAction<State>>;
}

export const CurrencyContext = createContext<CurrencyContextType | null>(null);

export const CurrencyProvider = ({children}: PropsWithChildren) => {
    const [state, setState] = useState<State>(() => getInitialState())

    return (
        <CurrencyContext.Provider value={{state, setState}}>
            {children}
        </CurrencyContext.Provider>
    )
}

