import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

import Header from "./components/Header";

require("dotenv").config();

function App() {
  const [games, setGames] = useState([]);

  const getGames = async () => {
    const response = await Axios.get("https://api.twitch.tv/helix/games/top/", {
      headers: {
        Authorization: process.env.REACT_APP_AUTHORIZATION,
        "Client-ID": process.env.REACT_APP_ClIENT_ID,
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
      <Header />
      <h1>Top 20 Twitch Games!</h1>
      {showGames()}
    </div>
  );
}

export default App;

// https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=f84xq6cc6obqj2hyjngf973fot90mi&redirect_uri=http://localhost:3000/&scope=viewing_activity_read
