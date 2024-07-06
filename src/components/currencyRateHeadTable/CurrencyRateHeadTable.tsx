import {TableHead} from "../ui/table/tableHead/TableHead.tsx";
import {TableRow} from "../ui/table/tableRow/TableRow.tsx";
import {TableHeadCell} from "../ui/table/tableHeadCell/TableHeadCell.tsx";


export const CurrencyRateHeadTable = () => {

    return (
        <TableHead>
            <TableRow>
                <TableHeadCell>
                    <span>Pair name / market</span>
                </TableHeadCell>
                <TableHeadCell >
                    <span>First</span>
                </TableHeadCell>
                <TableHeadCell  >
                    <span >Second </span>
                </TableHeadCell>
                <TableHeadCell >
                    <span>Third</span>
                </TableHeadCell>
            </TableRow>
        </TableHead>
    )
}