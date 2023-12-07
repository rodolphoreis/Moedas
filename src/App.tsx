import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [EURValue, setEURValue] = useState<string>("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://v6.exchangerate-api.com/v6/1143c7f24ca5a81ea31e76bb/latest/EUR"
      );
      console.log(response);
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
        {/* <select name="" id=""></select> */}
        <button type="submit">Converter</button>
      </form>
    </>
  );
}

export default App;
