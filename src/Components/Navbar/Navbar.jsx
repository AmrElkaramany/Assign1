import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // تأكد من إضافة هذا السطر
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top`}
        style={{padding: isScrolled ? "10px 0" : "20px 0",  // تغيير الـ padding
          }}
      >
        <div className="container">
          <Link
            className="navbar-brand text-white fs-2 text-uppercase fw-bolder"
            to={"/"}
          >
            start framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item m-3 fs-5">
                <NavLink
                  className="nav-link text-white fw-bolder d-flex justify-content-center align-items-center"
                  to={"about"}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item m-3 fs-5">
                <NavLink
                  className="nav-link text-white fw-bolder d-flex justify-content-center align-items-center"
                  to={"portfolio"}
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item m-3 fs-5">
                <NavLink
                  className="nav-link text-white fw-bolder d-flex justify-content-center align-items-center"
                  to={"contact"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
