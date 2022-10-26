import React, { useState, useEffect } from "react";
import axios from "axios";
import BarCharts from "./BarCharts";
import { PersonData } from "../types";

const Charts: React.FunctionComponent = () => {
  const [data, setData] = useState<PersonData[]>();

  const fetcher = async () => {
    const result = await axios.get("test1.json").then((response: any) => {
      setData(response.data.data);
    });
  };

  useEffect(() => {
    if (!data) fetcher();
  }, []);

  return <div>{data?.length ? <BarCharts persons={data} /> : null}</div>;
};

export default Charts;
