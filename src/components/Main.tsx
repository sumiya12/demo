import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

interface Data {
  id: number;
  name: string;
  desc: string;
  years: { score: number[][] } | any;
}

function Main(): JSX.Element {
  const [data, setData] = useState<Array<Data>>();
  useEffect(() => {
    if (!data) loader();
  }, []);

  async function loader() {
    try {
      await axios.get("data.json").then((res) => {
        // console.log(res.data.data);
        setData(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th colSpan={2} className="head">
              Years
            </th>
            <th colSpan={5} className="head">
              2021
            </th>
            <th colSpan={23} className="head">
              2022
            </th>
          </tr>
          <tr>
            <th colSpan={2} className="subHead">
              Quarters
            </th>
            <th colSpan={5} className="subHead">
              Q4
            </th>
            <th colSpan={5} className="subHead">
              Q1
            </th>
            <th colSpan={5} className="subHead">
              Q2
            </th>
            <th colSpan={7} className="subHead">
              Q3
            </th>
            <th colSpan={6} className="subHead">
              Q4
            </th>
          </tr>

          <tr>
            <th>No</th>
            <th>Name</th>

            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>

            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>

            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>

            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>

            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.map((value: Data, index: number) => {
              return (
                <tr key={index}>
                  <td>{value?.id}</td>
                  <td>{value?.name}</td>
                  <td>{value.years.score[0]}</td>
                  <td>{value.years.score[1][1]}</td>
                  <td>{value.years.score[2]}</td>
                  <td>{value.years.score[3]}</td>
                  <td>{value.years.score[4]}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default Main;