import { Outlet } from "react-router";
import "./App.css";
import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";
import Home from "./page/Home";

function App() {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <Outlet/>
    </>
  );
}

export default App;
