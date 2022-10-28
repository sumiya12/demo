import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { PersonData } from "./types";
import LineChart from "./components/LineChart";
import AddPeople from "./components/AddPeople";

function App() {
  const [data, setData] = useState<PersonData[]>([]);
  const fetcher = async () => {
    const result = await axios.get("test1.json").then((response :any) => {
      setData(response.data.data);
    });
  };
  const handleFinish = (newData: PersonData[]) => {
    setData([...newData]);
  } 

  useEffect(() => {
    if (data.length === 0) fetcher();
  }, []);

  return (
    <div>
      {data?.length ? (
        <>
        
          <LineChart datas={data} />
          <AddPeople onFinish={handleFinish} datas={data}/>
        </>
      ) : null}
    </div>
  );
}

export default App;
