import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div>
      <button className="btn">
        <Link to="/topgames">Top 20 Games</Link>
      </button>
      <button className="btn">
        <Link>TBD</Link>
      </button>
    </div>
  );
};

export default Home;
