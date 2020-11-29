import { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";
require("dotenv").config();

const TopGames = () => {
  const [games, setGames] = useState([]);

  const getGames = async () => {
    const response = await Axios.get("https://api.twitch.tv/helix/games/top/", {
      headers: {
        Authorization: "Bearer o7slx9f8cby28xwfwj4lbsg5qvo078",
        "Client-ID": "f84xq6cc6obqj2hyjngf973fot90mi",
      },
    });
    console.log(response.data.data);
    setGames(response.data.data);
  };

  useEffect(() => {
    getGames();
  }, []);

  const showGames = () => {
    return games.map((game) => {
      return (
        <ul key={game.name}>
          <img src={game.box_art_url} alt={game.name} />
          <li>{game.name}</li>
        </ul>
      );
    });
  };
  return (
    <div className="App">
      <h1>Top 20 Twitch Games!</h1>
      {showGames()}
    </div>
  );
};

export default TopGames;
