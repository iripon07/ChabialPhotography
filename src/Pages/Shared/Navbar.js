import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/checkout">CheckOut</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        {" "}
        <Link to="/about">About</Link>
      </li>
      <li>
        {user ? (
          <Link to="/" onClick={logout}>
            Sign Out
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );

  return (
    <div className="h-24 flex items-center">
      <div className="navbar max-w-screen-xl mx-auto text-primary font-bold text-lg">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex="0" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-9 rounded-b-10 p-2 w-52 bg-white"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/">
            <>
              <img className="w-20 h-20 ml-2" src={logo} alt="logo" />
            </>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
