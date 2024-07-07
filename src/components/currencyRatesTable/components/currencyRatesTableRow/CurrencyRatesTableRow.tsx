import {CurrencyPairs, Markets, State} from "../../../../types.ts";
import {memo} from "react";
import {TableRow} from "../../../common/table/tableRow/TableRow.tsx";
import {TableBodyCell} from "../../../common/table/tableBodyCell/TableBodyCell.tsx";
import {getMinCurrencyRateForAllMarkets} from "./utils/getMinCurrencyRateForAllMarkets.ts";
import {getCurrencyRateMapByMarket} from "../../utils/getCurrencyRateMapByMarket.ts";

interface CurrencyRatesTableRowProps {
    state: State
    currencyPair:CurrencyPairs
}

export const CurrencyRatesTableRow = memo(({state, currencyPair}:CurrencyRatesTableRowProps)=>{
    const currencyRateValueMapByMarket = getCurrencyRateMapByMarket(state,currencyPair)
    const minValue = getMinCurrencyRateForAllMarkets(currencyRateValueMapByMarket)

    const getCellClassName = (currencyValue: number) => {
        if(minValue === null){
            return ''
        }

        return currencyValue === minValue ? "minValue" : ""
    }

    return (
        <TableRow>
            <TableBodyCell>{currencyPair}</TableBodyCell >
            {Object.values(Markets).map(market => {
                const currencyValue = state[market][currencyPair]

                return <TableBodyCell key={market} className={getCellClassName(currencyValue)}>
                    {currencyValue.toFixed(2)}
                </TableBodyCell>
            })}
        </TableRow>
    )
})


