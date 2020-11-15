import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <h1>Twitch</h1>
      <div>
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default Header;
