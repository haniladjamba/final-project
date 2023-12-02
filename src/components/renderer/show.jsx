import { Route, Routes } from "react-router-dom";

import Upcoming from "../pages/upcoming";
import TodayTask from "../pages/today";
import Priority from "../pages/priority";
import Reward from "../Reward";
import UpcomingOther from "../UpcomingOther";

const Show = () => {
  return (
    <>
      <Routes>
        <Route path="pages/upcoming" element={<Upcoming />} />
        <Route path="pages/today" element={<div><TodayTask /></div>} />
        <Route path="pages/priority" element={<Priority/>}/>
        <Route path="pages/reward" element={<Reward />} />
        <Route path="pages/upcoming" element={<UpcomingOther />} />
      </Routes>
    </>
  );
};

export default Show;
