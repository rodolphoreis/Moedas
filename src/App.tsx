import { useEffect, useState } from "react";

import "./App.css";

interface CoinData {
  [key: string]: number;
}

function App() {
  const [EURValue, setEURValue] = useState<string>("");
  const [coinData, setCoinData] = useState<CoinData>({});
  const [selectedCurrency, setSelectedCurrency] = useState<string>("EUR");
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://v6.exchangerate-api.com/v6/1143c7f24ca5a81ea31e76bb/latest/EUR"
      );
      const { conversion_rates } = await response.json();
      setCoinData(conversion_rates);
    } catch (error) {
      alert("Erro ao buscar dados.");
      console.log("Erro ao buscar dados.", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <form onSubmit={() => {}}>
        <input type="text" onChange={(e) => setEURValue(e.target.value)} />
        <select
          name="coinlist"
          id="coinlist"
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
        >
          {coinData &&
            Object.entries(coinData).map(([coin, value]) => (
              <option key={coin} value={value}></option>
            ))}
        </select>
        <button type="submit">Converter</button>
      </form>
    </>
  );
}

export default App;
