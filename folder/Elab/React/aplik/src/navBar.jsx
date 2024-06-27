import React, { useState } from "react";
import "./navBar.css";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function NavBar() {
  const [setIsOpen] = useState(true);
  const toggle = () => setIsOpen(false);
  return (
    <>
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <MenuOutlined />
      </label>
      <div className="navBar">
        <ul>
          <li>
            <Link to="/" onClick={toggle}>
              Početna
            </Link>
          </li>
          <li>
            <Link to="/tickets" onClick={toggle}>
              Kurs
            </Link>
          </li>
          <li>
            <Link to="/cards" onClick={toggle}>
              Start
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={toggle}>
              Korpa
            </Link>
          </li>
          <li>
  <Link to="/Search" onClick={toggle}>
    Pretraži
  </Link>
</li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
