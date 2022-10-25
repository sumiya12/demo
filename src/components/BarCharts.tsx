import React from "react";
import { ChartData } from "chart.js";
import { Chart, registerables, LineElement ,ScatterDataPoint ,BubbleDataPoint} from "chart.js";
import { Line } from "react-chartjs-2";
import { PersonData } from "../types";

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

const BarCharts: React.FunctionComponent<Props> = ({ persons }) => {
  const generateChartData = (): ChartData<"line", (number | ScatterDataPoint | BubbleDataPoint | null)[], unknown> => {
    const data: number[] = [];
    const labels: string[] = [];
    persons.forEach((person) => {
      data.push(person.score);
      labels.push(person.name);
    });

    return {
      labels,
      datasets: [
        {
          label: "name",
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
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <Line type="line" data={generateChartData()} options={options} />
    </div>
  );
};

export default BarCharts;
