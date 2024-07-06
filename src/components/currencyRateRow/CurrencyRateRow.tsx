import {TableBodyCell} from "../ui/table/tableBodyCell/TableBodyCell.tsx";
import {TableRow} from "../ui/table/tableRow/TableRow.tsx";
import {CurrencyPair} from "../../types.ts";

interface CurrencyRateRowProps {
    item: CurrencyPair
}

export const CurrencyRateRow = ({item}:CurrencyRateRowProps)=>{
    const { first, second, third,pair } = item

    const minValue = Math.min(first, second, third)

    const allValuesEqual = first === second && second === third

    const minValueClass = "minValue"

    return (
        <TableRow>
            <TableBodyCell>
                <span>{pair}</span>
            </TableBodyCell>
            <TableBodyCell className={!allValuesEqual && first === minValue ? minValueClass : ""}>
                <span>{first}</span>
            </TableBodyCell>
            <TableBodyCell className={!allValuesEqual && second === minValue ? minValueClass : ""}>
                <span >{second}</span>
            </TableBodyCell>
            <TableBodyCell className={!allValuesEqual && third === minValue ? minValueClass : ""}>
                <span> {third}</span>
            </TableBodyCell>
        </TableRow>
    )
}


