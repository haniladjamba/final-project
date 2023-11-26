/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import "./assets/style.css";
import SideBar from "./components/sidebar";

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