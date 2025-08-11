import { use, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { FaBasketShopping } from "react-icons/fa6";

const Header = () => {
  const { signOutUser, user } = use(AuthContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white px-20 bg-primary">
      <div className="navbar bg-white-100 max-w-7xl mx-auto">
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
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    {" "}
                    <NavLink to={"/add"}>Add Item</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/all"}>All Items</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/my"}>My Items</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/all-recover"}>All Recovered Items</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to={"/donate"}>Donation</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            {" "}
            <FaBasketShopping className="text-[#1EA69A] w-9 h-9" />{" "}
            <span className="text-2xl ml-2 font-bold text-[#1EA69A]">
              WhereIsIt
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">
            <li>
              {" "}
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 rounded-none text-[#1EA69A] font-semibold text-[15px] shadow-none outline-none focus:shadow-none focus:outline-none"
                    : "font-semibold text-[15px] text-gray-600 shadow-none outline-none focus:shadow-none focus:outline-none letter-primary"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <details className="">
                <summary className="font-semibold text-[15px] text-gray-600 shadow-none outline-none focus:shadow-none focus:outline-none letter-primary">
                  Lost & Found
                </summary>
                <ul className="p-2 w-[200px] mt-0 z-10 letter-primary">
                  <li>
                    <NavLink to={"/all"}>All Items</NavLink>
                  </li>
                  {user ? (
                    <>
                      {" "}
                      <li>
                        <NavLink to={"/my"}>My Items</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/all-recover"}>
                          All Recovered Items
                        </NavLink>
                      </li>{" "}
                    </>
                  ) : (
                    ""
                  )}
                </ul>
              </details>
            </li>
            <li>
              {" "}
              <NavLink
                to={"/add"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 rounded-none text-[#1EA69A] font-semibold text-[15px] shadow-none outline-none focus:shadow-none focus:outline-none"
                    : "font-semibold text-[15px] text-gray-600 shadow-none outline-none focus:shadow-none focus:outline-none letter-primary"
                }
              >
                Post Here
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end pr-5">
          {user ? (
            <div>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar mr-4 tooltip tooltip-left"
                data-tip={user?.displayName}
              >
                <div className="w-10 rounded-full ">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <Link
                to="/"
                onClick={() => {
                  signOutUser();
                }}
                className="btn btn-outline btn-primary text-[#1EA69A] border-[#1EA69A] border-2 text-[15px] hover:bg-white shadow-none"
              >
                Logout
              </Link>
            </div>
          ) : (
            <Link to="/login" className="">
              <button className=" btn text-[#1EA69A] border-[#1EA69A] border-2 text-[15px] shadow-none outline-none focus:shadow-none focus:outline-none">
                Login
              </button>
            </Link>
          )}
          <label className="swap swap-rotate ml-3">
            <input onChange={handleToggle} type="checkbox" />

            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
