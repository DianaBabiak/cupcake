import {Table} from "../ui/table/Table.tsx";
import {TableBody} from "../ui/table/tableBody/TableBody.tsx";
import {CurrencyPair} from "../../types.ts";
import {CurrencyRateHeadTable} from "../currencyRateHeadTable/CurrencyRateHeadTable.tsx";
import {CurrencyRateRowTable} from "../currencyRateRowTable/CurrencyRateRowTable.tsx";

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
            <CurrencyRateHeadTable/>
            <TableBody>
                {data?.map(item => (
                    <CurrencyRateRowTable item={item} key={item.id} />
                ))}
            </TableBody>
        </Table>
    )
}