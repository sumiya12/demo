import React from "react";
import { ChartData } from "chart.js";
import { Bar } from "react-chartjs-2";
import { PersonData } from "../types";

interface Props {
    person: PersonData[];
  }
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const BarCharts:React.FunctionComponent<Props> = ({ person }) => {
  const generateChartData = (): ChartData => {
    const data: number[] = [];
    const labels: string[] = [];

    person.forEach((person) => {
      data.push(person.score);
      labels.push(person.name);
    });

    return {
      labels,
      datasets: [
        {
          label: "score",
          data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div>
      <Bar type="bar" data={generateChartData()} options={options} />
    </div>
  );
};

export default BarCharts;

