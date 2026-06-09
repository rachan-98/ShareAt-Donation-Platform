import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const getDashboardLink = () => {
    if (!user) return "/";
    if (user.role === "donor") return "/donor";
    if (user.role === "ngo") return "/ngo";
    if (user.role === "admin") return "/admin";
    return "/";
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-emerald-600 hover:text-emerald-700 transition"
        >
          ShareAt 💚
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-base font-medium">

          <Link
            to="/"
            className="text-slate-700 hover:text-emerald-600 transition"
          >
            Home
          </Link>

          <a
            href="#how-it-works"
            className="text-slate-700 hover:text-emerald-600 transition"
          >
            How It Works
          </a>

          {!user ? (
            <>
              <Link
                to="/login"
                className="text-slate-700 hover:text-emerald-600 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-emerald-700 transition shadow-md"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to={getDashboardLink()}
                className="text-slate-700 hover:text-emerald-600 transition"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-red-600 transition shadow-md"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;