/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import "./assets/style.css";
import "bootstrap/dist/css/bootstrap.css";
import SideBar from "./components/SideBar";
import './config/firebase';
import './components/database/sendData/TestSend'
import FirebaseDemo from "./components/database/sendData/TestSend";
import NewData from "./components/database/getNew";
import TodayTask from "./components/pages/today";


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
