import React, { useState, useEffect } from "react";
import axios from "axios";
import type { PersonData } from "../types";
import BarCharts from "./BarCharts";



const Charts: React.FunctionComponent = () => {
  const [data, setData] = useState<PersonData>();

  const fetcher = async () => {
    const result = await axios.get("data.json").then((response: any) => {
      setData(response.data.data);
      console.log(response);
    });
  };

  useEffect(() => {
    if (!data) fetcher();
  }, []);

  console.log(data);

  return <div>{data ? <BarCharts person={data} /> : ""}</div>;
};

export default Charts;
