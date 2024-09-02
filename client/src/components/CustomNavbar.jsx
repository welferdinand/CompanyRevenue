import { Link } from "react-router-dom";

export default function CustomNavbar() {
  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div className="sticky top-0 z-50 flex h-16 items-center px-4 bg-white shadow-md">
      <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
        <a
          className="text-sm font-medium transition-colors hover:text-indigo-600"
          href="/"
        >
          Dashboard
        </a>
      </nav>
      <div className="ml-auto flex items-center space-x-4">
        <Link
          className="bg-red-600 text-gray-200  p-2 rounded  hover:bg-red-500 hover:text-gray-100"
          to="/login"
          onClick={handleLogout}
        >
          Logout
        </Link>
      </div>
    </div>
  );
}
