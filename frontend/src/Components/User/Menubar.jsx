import { Outlet } from "react-router-dom";

function Menubar() {
  return (
    <>
      <Outlet />
      <div id="menubar"></div>;
    </>
  );
}

export default Menubar;
