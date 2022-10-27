import "./App.css";
import AddPeople from "./components/AddPeople";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { PersonData, Score } from "./types";
import LineChart from "./components/LineChart";

function App() {
  const [data, setData] = useState<PersonData[]>();
  const fetcher = async () => {
    const result = await axios.get("test1.json").then((response: any) => {
      console.log(response.data.data);

      setData(response.data.data);
    });
  };

  useEffect(() => {
    if (!data) fetcher();
  }, []);

  console.log(data);

  return (
    <div>
      {data?.length ? <LineChart datas={data} /> : null}

      <AddPeople setData={setData} datas={data} />
    </div>
  );
}

export default App;
