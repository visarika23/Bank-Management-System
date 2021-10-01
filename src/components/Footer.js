import React from "react";
import "./Style.css";

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-5 ">
              <p> © 2021 Copyright: www.Bank.com</p>
            </div>

            <div className="col-sm-2 mt-2 footer-links">
              <p className="header-link">About</p>
              <p className="header-link">Privacy</p>
              <p className="header-link">Contact Us</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
