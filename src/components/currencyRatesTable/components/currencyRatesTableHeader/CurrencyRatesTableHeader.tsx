import {memo} from "react";
import {TableHead} from "../../../common/table/tableHead/TableHead.tsx";
import {TableRow} from "../../../common/table/tableRow/TableRow.tsx";
import {TableHeadCell} from "../../../common/table/tableHeadCell/TableHeadCell.tsx";

interface CurrencyRatesTableHeaderProps {
    headerItems:string[]
}

export const CurrencyRatesTableHeader = memo(({headerItems}:CurrencyRatesTableHeaderProps) => {
    return (
        <TableHead>
            <TableRow>
                {headerItems.map(item => (
                    <TableHeadCell key={item}>
                       {item}
                    </TableHeadCell>
                ))}
            </TableRow>
        </TableHead>
    )
})