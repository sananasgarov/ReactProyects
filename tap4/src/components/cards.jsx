import React from "react";
import Card from "./card";
import { useEffect } from "react";
import { useState } from "react";

function Cards() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok");
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  return (
    <div className="max-w-[1320px] flex flex-col gap-[50px] mx-auto p-[60px]">
      {data.map((item) => (
        <Card
          key={item.id}
          userId={item.userId}
          id={item.id}
          title={item.title}
          completed={item.completed}
        />
      ))}
    </div>
  );
}

export default Cards;
