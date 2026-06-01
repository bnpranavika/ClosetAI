import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/add-clothes", label: "Add Clothes" },
    { path: "/wardrobe", label: "Wardrobe" },
    { path: "/create-outfit", label: "Create Outfit" },
    { path: "/favorites", label: "Favorites" },
    { path: "/profile", label: "Profile" },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        👗 ClosetAI
      </div>

      <div className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-box ${
              location.pathname === item.path
                ? "active-nav"
                : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;