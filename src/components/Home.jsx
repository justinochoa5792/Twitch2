import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="home">
      <button>
        <Link to="/topgames">Top 20 Games</Link>
      </button>
      <button>
        <Link to="/streamers">Get Streamers</Link>
      </button>
    </div>
  );
};

export default Home;
