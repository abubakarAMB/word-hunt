import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Made by{" "}
        <a
          href="https://github.com/abubakarAMB"
          target="__blank"
          rel="noreferrer noopener"
        >
          Abubakar Musa
        </a>
      </span>
      <div className="iconContainer">
        <a
          href="https://www.linkedin.com/in/abubakar-musa-ab2039a7"
          target="__blank"
          rel="noreferrer noopener"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
