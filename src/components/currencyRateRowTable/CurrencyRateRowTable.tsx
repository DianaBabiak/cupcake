import {TableBodyCell} from "../ui/table/tableBodyCell/TableBodyCell.tsx";
import {TableRow} from "../ui/table/tableRow/TableRow.tsx";
import {CurrencyPair, Market, State} from "../../types.ts";
import {createValueCurrency} from "../currencyRateTable/utils.ts";
import {memo} from "react";

interface CurrencyRateRowProps {
    state: State
    currency:CurrencyPair
}

export const CurrencyRateRowTable = memo(({state, currency}:CurrencyRateRowProps)=>{
    const valuesInRow = createValueCurrency(state,currency)
    const arrValuesInRow = Object.values(valuesInRow)
    const minValue = Math.min(...arrValuesInRow)
    const allValuesEqual = arrValuesInRow.every(element => element === arrValuesInRow[0])

    const minValueClass = "minValue"

    return (
        <TableRow>
            <TableBodyCell>
                {currency}
            </TableBodyCell >
            {Object.values(Market).map(market => (
                <TableBodyCell className={!allValuesEqual && state[market][currency] === minValue ? minValueClass : ""}>
                    {state[market][currency].toFixed(2)}
                </TableBodyCell>
            ))}
        </TableRow>
    )
})


