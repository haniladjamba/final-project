/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import "./assets/style.css";

import SideBar from "./components/SideBar";

import { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import UpcomingReward from "./components/todayReward";
import UpcomingTask from "./components/todayTask";
import UpcomingTomorrow from "./components/UpcomingTomorrow";
import UpcomingOther from "./components/UpcomingOther";


function App() {
  return (

    <>
      {/* ... (unchanged code) */}
      <div className="wrapper d-flex align-items-stretch">
        <SideBar />
      </div>
    </>

  );
}

export default App;