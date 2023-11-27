import { Route, Routes } from "react-router-dom";

import Upcoming from "../pages/upcoming";
import TodayTask from "../pages/today";
import Priority from "../pages/priority";
import Reward from "../Reward";

const Show = () => {
  return (
    <>
      <Routes>
        <Route path="pages/upcoming" element={<Upcoming />} />
        <Route path="pages/today" element={<TodayTask />} />
        <Route path="pages/priority" element={<Priority/>}/>
        <Route path="pages/reward" element={<Reward />} />
      </Routes>
    </>
  );
};

export default Show;
