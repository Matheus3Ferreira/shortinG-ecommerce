import React from "react";
import { NavLink, Link } from "react-router-dom";
import { GiUnderwearShorts } from "react-icons/gi";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";
export default function Header() {
  const [auth, setAuth] = useAuth();
  function handleLogout() {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    toast.success("Logged out successfully");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse mx-2" id="navbarTogglerDemo01">
          <Link to="/" className="navbar-brand">
            <GiUnderwearShorts /> E-Commerce
          </Link>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category" className="nav-link">
                Category
              </NavLink>
            </li>
            {!auth.user ? (
              <>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>{" "}
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink onClick={handleLogout} to="/" className="nav-link">
                  Logout
                </NavLink>{" "}
              </li>
            )}

            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">
                Cart (0)
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
