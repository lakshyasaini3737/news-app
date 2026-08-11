import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        📰 NewsApp
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/category/Technology">
          Technology
        </Link>

        <Link to="/category/Business">
          Business
        </Link>

        <Link to="/category/Sports">
          Sports
        </Link>

        <Link to="/category/Health">
          Health
        </Link>

        <Link to="/category/Science">
          Science
        </Link>

        <Link to="/category/World">
          World
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;