import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink className="border-b-2 text-lg border-b-transparent" to="/">
                  <a>Home</a>
                </NavLink>
              </li>
              <li>
                <NavLink className="border-b-2 text-lg border-b-transparent" to="/all-plants">
                  <a>All Plants</a>
                </NavLink>
              </li>
              <li>
                <NavLink className="border-b-2 text-lg border-b-transparent" to="/add-plants">
                  <a>Add Plants</a>
                </NavLink>
              </li>
              <li>
                <NavLink className="border-b-2 text-lg border-b-transparent" to="/my-plants">
                  <a>My Plants</a>
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl text-green-500 font-bold">
            PlantPlanet
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink className="border-b-2 text-lg border-b-transparent" to="/">
                <a>Home</a>
              </NavLink>
            </li>
            <li>
              <NavLink className="border-b-2 text-lg border-b-transparent" to="/all-plants">
                <a>All Plants</a>
              </NavLink>
            </li>
            <li>
              <NavLink className="border-b-2 text-lg border-b-transparent" to="/add-plants">
                <a>Add Plants</a>
              </NavLink>
            </li>
            <li>
              <NavLink className="border-b-2 text-lg border-b-transparent" to="/my-plants">
                <a>My Plants</a>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <a className="btn btn-outline btn-success mx-4">Login</a>
          </Link>
          <Link to="/register">
            <a className="btn mr-2 btn-soft btn-success">Register</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
