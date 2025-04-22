import { Outlet, NavLink } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav className="flex flex-col space-y-2">
          <NavLink to="" end className="hover:text-yellow-400">Home</NavLink>
          <NavLink to="posts" className="hover:text-yellow-400">Posts</NavLink>
          <NavLink to="settings" className="hover:text-yellow-400">Settings</NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
