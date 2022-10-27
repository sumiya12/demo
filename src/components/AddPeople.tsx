import React from "react";
import fs from "fs";

type Props = {};

const AddPeople = (props: Props) => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const id = data.get("id");
    const name = data.get("name");
    const color = data.get("color");
    const description = data.get("description");
    const date = data.get("date");
    const quarter = data.get("quarter");
    const sprint = data.get("sprint");
    const point = data.get("point");

    const people = {
      id: id,
      name: name,
      color: color,
      desc: description,
      scores: [
        {
          date: date,
          quarter: quarter,
          sprint: sprint,
          point: point,
        },
      ],
    };
    console.log(people);
    

    // fs.readFile("./test1.json", "utf-8", (err: any, data: any) => {
    //   let arr = [];
    //   arr = JSON.parse(data);
    //   console.log(arr);
    //   if (err) {
    //     console.log(err);
    //     return;
    //   } else {
    //     arr = arr.map((e: any) => {
    //       console.log(e);
    //     });
    //   }
    // });
  };

  return (
    <div
      style={{
        display: "flex",
        maxWidth: "300px",
        margin: "0 auto",
        border: "1px solid gray",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        borderRadius: "10px",
        boxShadow: "1px 1px gray",
        padding: "20px",
      }}
    >
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
          type="text"
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
          type="text"
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPeople;
