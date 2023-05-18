import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/about">About</Link>{" "}
      </li>

      <li>
        <Link to="/bookings">Blog</Link>
      </li>
    </>
  );
  return (
    <div className=" bg-pink-200">
      <div className=" max-w-7xl mx-auto navbar h-20 mb-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <img className="h-16 w-18 rounded-lg" src={logo} alt="" />
          <h1 className="text-3xl " style={{ fontFamily: "Lobster, cursive" }}>
            Toy<span className="text-cyan-800">H</span>ouse
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        <div className="navbar-end">
          {user && (
            <div style={{ width: "50px" }} className="me-2" id="clickable">
              {" "}
              <img
                className="rounded-full"
                style={{ width: "40px" }}
                src={user.photoURL}
                alt=""
              />
            </div>
          )}

          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-primary bg-cyan-800 border-0 "
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary bg-cyan-800 border-0 ">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
