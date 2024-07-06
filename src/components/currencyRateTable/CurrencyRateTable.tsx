import {Table} from "../ui/table/Table.tsx";
import {TableHead} from "../ui/table/tableHead/TableHead.tsx";
import {TableRow} from "../ui/table/tableRow/TableRow.tsx";
import {TableHeadCell} from "../ui/table/tableHeadCell/TableHeadCell.tsx";
import {TableBody} from "../ui/table/tableBody/TableBody.tsx";
import {CurrencyRateRow} from "../currencyRateRow/CurrencyRateRow.tsx";
import {CurrencyPair} from "../../types.ts";

export const CurrencyRateTable = ()=>{

    const data:CurrencyPair[] = [
        {
            id: 1,
            pair: "RUB/CUPCAKE",
            first: 1.22,
            second: 1.25,
            third: 1.22,
        },
        {
            id: 2,
            pair: "USD/CUPCAKE",
            first: 1.51,
            second: 1.56,
            third: 1.56,
        },
        {
            id: 3,
            pair: "EUR/CUPCAKE",
            first: 1.89,
            second: 1.89,
            third: 1.89,
        },
        {
            id: 4,
            pair: "RUB/USD",
            first: 1.789,
            second: 1.769,
            third: 1.789,
        },
        {
            id: 5,
            pair: "RUB/EUR",
            first: 1.45,
            second: 1.45,
            third: 1.1,
        },
        {
            id: 6,
            pair: "EUR/USD",
            first: 1.345,
            second: 1.345,
            third: 1.345,
        },
    ]



    return (
        <Table>
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
            <TableBody>
                {data?.map(item => (
                    <CurrencyRateRow item={item} key={item.id} />
                ))}
            </TableBody>
        </Table>
    )
}