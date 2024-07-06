import {TableHead} from "../ui/table/tableHead/TableHead.tsx";
import {TableRow} from "../ui/table/tableRow/TableRow.tsx";
import {TableHeadCell} from "../ui/table/tableHeadCell/TableHeadCell.tsx";
import {memo} from "react";

interface CurrencyRateHeadTableProps {
    headerRow:string[]
}

export const CurrencyRateHeadTable = memo(({headerRow}:CurrencyRateHeadTableProps) => {

    return (
        <TableHead>
            <TableRow>
                {headerRow.map(item => (
                    <TableHeadCell key={item}>
                       {item}
                    </TableHeadCell>
                ))}
            </TableRow>
        </TableHead>
    )
})