import React from "react";
import data from "data.json"
const Main = () => {
    console.log(data);
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
          <tr></tr>
        </tbody>
      </table>
    </>
  );
};

export default Main;
