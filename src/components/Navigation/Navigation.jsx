import React from "react";
import css from "./Navigation.module.css"

 function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className={css.headerbg}>
      <div className="nav-wrapper">
        <a href="#about" className={`${css.headertitle} brand-logo left`}  onClick={() => handlePageChange("About")}>
          Tesfa
        </a>
        <ul className="right">
        <li className={`${currentPage === "About" ? `${css.customactive}` : ""} ${css.customLi}`}>
            <a href="#about" onClick={() => handlePageChange("About")}>
              About
            </a>
          </li>
        <li className={`${currentPage === "Portfolio" ? `${css.customactive}` : ""} ${css.customLi}`}>
            <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
              Portfolio
            </a>
          </li>
          <li className={`${currentPage === "Contact" ? `${css.customactive}` : ""} ${css.customLi}`}>
            <a href="#contact" onClick={() => handlePageChange("Contact")}>
              Contact
            </a>
          </li>
          <li className={`${currentPage === "Resume" ? `${css.customactive}` : ""} ${css.customLi}`}>
            <a href="#resume" onClick={() => handlePageChange("Resume")}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;