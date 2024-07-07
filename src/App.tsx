import './styles/App.css'
import {CurrencyRatesTable} from "./components/currencyRatesTable/CurrencyRatesTable.tsx";
import {CurrencyProvider} from "./components/currencyRatesTable/contexts/CurrencyContext.tsx";

function App() {
    return (
        <CurrencyProvider>
            <CurrencyRatesTable/>
        </CurrencyProvider>
    )
}

export default App
