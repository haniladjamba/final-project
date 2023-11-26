import { Route, Routes } from "react-router-dom";

import Upcoming from "../pages/upcoming";
import TodayTask from "../pages/today";

const Show = () => {
  return (
    <>
      <Routes>
        <Route path="pages/upcoming" element={<Upcoming />} />
        <Route path="pages/today" element={<TodayTask />} />
      </Routes>
    </>
  );
};

export default Show;
