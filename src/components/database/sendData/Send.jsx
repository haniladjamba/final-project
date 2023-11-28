import React from "react";
import { useState } from "react";

const PostData = async (e) => {
  const [details] = useState({
    todo: "",
    reward: "",
  });

  e.preventDefault();

  const { todo, reward } = details;

  const res = await fetch(
    "https://fe-final-project-d25ae-default-rtdb.firebaseio.com/task/tommorow.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo,
        reward,
      }),
    }
  );
};

export default PostData;
