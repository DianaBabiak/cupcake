import {Table} from "../ui/table/Table.tsx";
import {TableBody} from "../ui/table/tableBody/TableBody.tsx";
import {GetRatesResponse, MarketData} from "../../types.ts";
import {CurrencyRateHeadTable} from "../currencyRateHeadTable/CurrencyRateHeadTable.tsx";
import {CurrencyRateRowTable} from "../currencyRateRowTable/CurrencyRateRowTable.tsx";
import {useEffect, useState} from "react";

export const CurrencyRateTable = ()=>{
    console.log('render')
    const [rates, setRates] = useState<MarketData[]>([])

    const data = [
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

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const responses = await Promise.all([
    //                 fetch('http://localhost:3000/api/v1/first'),
    //                 fetch('http://localhost:3000/api/v1/second'),
    //                 fetch('http://localhost:3000/api/v1/third')
    //             ]);
    //
    //             const data = await Promise.all(responses.map(response => {
    //                 if (!response.ok) {
    //                     throw new Error('Network response was not ok');
    //                 }
    //                 return response.json();
    //             }));
    //
    //             console.log(data);
    //         } catch (error) {
    //             console.error('Fetch error:', error);
    //         }
    //     };
    //
    //     fetchData();
    // }, []);

    let isPollingActive = true

    const longPoll = async () => {
        if (!isPollingActive) return

        try {
            const response: Response = await fetch('http://localhost:3000/api/v1/first/poll')
            if (response.ok) {
                const data: GetRatesResponse = await response.json()
                console.log('New data:', data)
            } else {
                console.error('Error:', response.status)
            }
        } catch (error) {
            console.error('Fetch error:', error)
        } finally {
            if (isPollingActive) {
                longPoll();
            }
        }
    };

    const stopLongPolling = () => {
        isPollingActive = false;
    };

    useEffect(() => {
        longPoll()

        return () => {""
            stopLongPolling();
        }
    }, [])

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