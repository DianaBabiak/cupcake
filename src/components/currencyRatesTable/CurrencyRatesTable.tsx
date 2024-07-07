import {CurrencyRatesTableHeader} from "./components/currencyRatesTableHeader/CurrencyRatesTableHeader.tsx";
import {CurrencyRatesTableRow} from "./components/currencyRatesTableRow/CurrencyRatesTableRow.tsx";
import {Table} from "../common/table/Table.tsx";
import {TableBody} from "../common/table/tableBody/TableBody.tsx";
import {HEADER_ITEMS, ROWS_ITEMS} from "./constants.ts";
import {useFetchCurrencyRates} from "./hooks/useFetchCurrencyRates.tsx";

export const CurrencyRatesTable = () => {
    useFetchCurrencyRates()

    return (
        <Table>
            <CurrencyRatesTableHeader headerItems={HEADER_ITEMS}/>
            <TableBody>
                {ROWS_ITEMS.map(currency => <CurrencyRatesTableRow key={currency} currencyPair={currency}/>)}
            </TableBody>
        </Table>
    )
}