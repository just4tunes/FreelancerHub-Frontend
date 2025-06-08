import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <header>User Header (Navbar)</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;

