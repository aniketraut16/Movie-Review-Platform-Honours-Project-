import { Outlet } from "react-router-dom";

function Menubar() {
  return (
    <>
      <Outlet />
      <div>Menubar</div>;
    </>
  );
}

export default Menubar;
