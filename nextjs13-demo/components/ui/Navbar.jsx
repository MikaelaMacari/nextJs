import React from "react";
import Link from "next/link";
const Navbar = () => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/photos", text: "Photos" },
    { href: "/posts", text: "Posts" },
  ];
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" href="/">
            Logo
          </Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map((linkItem) => {
              return (
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href={linkItem.href}>
                    {linkItem.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
