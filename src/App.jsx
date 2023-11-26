/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import "./assets/style.css";
import "bootstrap/dist/css/bootstrap.css";
import SideBar from "./components/SideBar";

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
