import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authSlice from "../../store/authSlice";
import Container from "../container/Container";
import Logo from "../Logo";

function Header() {
  const authStatus = useSelector((state) => state.status); // if any error lets check once time code change made by me.

  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/Login",
      active: !authStatus,
    },
    {
      name: "SignUp",
      slug: "/Signup",
      active: !authStatus,
    },
    {
      name: "All Post",
      slug: "/all_post",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add_post",
      active: authStatus,
    },
  ];

  return (
    <header classname="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li className="" key={item.name}>
                  <button
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                    onClick={() => navigate(item.slug)}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {authStatus && <li>Logout</li>}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
