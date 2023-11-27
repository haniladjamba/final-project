import React from "react";
import useGetData from "../database/GetTodayTask";

const OtherComponent = () => {
  // Call the useGetData hook to get the emailList
  const emailList = useGetData();

  // Now you can use emailList in your component
  return (
    <div>
      <h2>Email List</h2>
      <ul>
        {emailList.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
    </div>
  );
};

export default OtherComponent;
