import React, { useState, useEffect } from "react";
import axios from "axios";
// import type { PersonData } from "../types";
import BarCharts from "./BarCharts";

// type Props ={
//   person : PersonData[]
// }

interface PersonData {
  score: number;
  id: number;
  name: string;
  desc: string;
  years: { Q1 :{ score: number[][] } | any};
}

const Charts: React.FunctionComponent = () => {
  const [data, setData] = useState<PersonData[]>();

  const fetcher = async () => {
    const result = await axios.get("test.json").then((response: any) => {
      setData(response.data.data);
      console.log(response);
    });
  };

  useEffect(() => {
    if (!data) fetcher();
  }, []);

  console.log(data);

  return <div>{data?.length ? <BarCharts persons={data} /> : null}</div>;
};

export default Charts;
