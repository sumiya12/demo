import React from "react";
import { PersonData, Score } from "../types";

interface Props {
  datas: PersonData[];
  onFinish: (newDatas: PersonData[]) => void;
}

const AddPeople: React.FunctionComponent<Props> = ({ datas, onFinish }) => {
  const newPersonScore: Score[] = [];
  datas[0].scores.forEach((score) => {
    newPersonScore.push({
      sprint: score.sprint,
      quarter: score.quarter,
      date: score.date,
      point: null,
    });
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    newPersonScore[newPersonScore.length - 1].point = e.target.point.value;
    const id = e.target.id.value;
    const sprint = e.target.sprint.value;
    const currentPerson = datas?.find((data) => {
      return data.id.toString() === id;
    });

    const totalSprint = currentPerson?.scores?.find((sprintEach) => {
      return sprintEach.sprint === sprint;
    });
    console.log(typeof sprint, typeof totalSprint, sprint === totalSprint);

    if (currentPerson != null) {
      const lastSprintResult =
        currentPerson.scores[currentPerson.scores.length - 1];

      currentPerson.scores.push({
        sprint: lastSprintResult.sprint + 1,
        quarter: lastSprintResult.quarter + 1,
        date: lastSprintResult.date,
        point: e.target.point.value,
      });
      datas.map((data) =>
        data.id === id
          ? {
              ...data,
              scores: currentPerson.scores,
            }
          : data
      );
      onFinish([...datas]);
    } else {
      onFinish([
        ...datas,
        {
          id: e.target.id.value,
          name: e.target.name.value,
          color: e.target.color.value,
          desc: e.target.description.value,
          scores: newPersonScore,
        },
      ]);
    }
  };

  return (
    <>
      <div
        style={{
          border: "1px solid gray",
          borderRadius: "10px",
          boxShadow: "1px 1px gray",
          padding: "20px",alignItems: "center",display: "flex",flexDirection: "column"
        }}
      ><h1>Add people</h1>
        <form
          onSubmit={handleSubmit}
          action="submit"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <input
            type="number"
            name="id"
            placeholder="Id"
            style={{ height: "20px", margin: "10px" }}
          />

          <input
            type="text"
            name="name"
            placeholder="Name"
            style={{ height: "20px", margin: "10px" }}
          />

          <input
            type="text"
            name="color"
            placeholder="Color"
            style={{ height: "20px", margin: "10px" }}
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            style={{ height: "20px", margin: "10px" }}
          />

          <input
            type="text"
            name="date"
            placeholder="Date"
            style={{ height: "20px", margin: "10px" }}
          />

          <input
            type="text"
            name="quarter"
            placeholder="Quarter"
            style={{ height: "20px", margin: "10px" }}
          />

          <input
            type="number"
            name="sprint"
            placeholder="Sprint"
            style={{ height: "20px", margin: "10px" }}
          />

          <input
            type="text"
            name="point"
            placeholder="Point"
            style={{ height: "20px", margin: "10px" }}
          />
          <button type="submit">
            {/* <Link to="/LineChart"> */}
            Submit
            {/* </Link>{" "} */}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPeople;
