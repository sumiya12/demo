import React from "react";
import { ChartData } from "chart.js";
import {
  Chart,
  registerables,
  LineElement,
  ScatterDataPoint,
  BubbleDataPoint,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { PersonData, Score } from "../types";

Chart.register(...registerables, LineElement);

interface Props {
  persons: PersonData[];
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const LineChart: React.FunctionComponent<Props> = ({ persons }) => {
  const generateChartData = (): ChartData<
    "line",
    (number | ScatterDataPoint | BubbleDataPoint | null)[],
    unknown
  > => {
    const labels: string[] = [];
    const dataSets: any[] = [];
    console.log(dataSets);
    persons[0].scores.forEach((each: Score) => {
        return labels.push(
          each.date + " Quarter " + each.quarter + " Sprint " + each.sprint
        );
      });
    persons.forEach((person) => {
      const data: number[] = [];
    
      person.scores.forEach((score: Score) => {
        data.push(score.point);
      });
      dataSets.push({
        label: person.name,
        data,
        backgroundColor: person.color,
        borderColor: person.color,
        borderWidth: 2,
        tension: 0.3,
      });
    });
    return {
      labels,
      datasets: dataSets,
    };
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Line data={generateChartData()} options={options} />
    </div>
  );
};

export default LineChart;
