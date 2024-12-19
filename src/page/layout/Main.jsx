
import Navbar1 from "../../components/Navbar1";
import Navbar2 from "../../components/Navbar2";
import { Outlet } from "react-router";

const Main = () => {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Outlet />
    </div>
  );
};

export default Main;
