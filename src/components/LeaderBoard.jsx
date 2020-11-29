import React, { useState, useEffect } from "react";
import Axios from "axios";

const LeaderBoard = () => {
  const [streams, setStreams] = useState([]);
  const [search, setSearch] = useState("");

  const getStreams = async () => {
    const response = await Axios.get("https://api.twitch.tv/helix/streams", {
      headers: {
        Authorization: "Bearer o7slx9f8cby28xwfwj4lbsg5qvo078",
        "Client-ID": "f84xq6cc6obqj2hyjngf973fot90mi",
      },
    });
    console.log(response.data.data);
    setStreams(response.data.data);
  };

  useEffect(() => {
    getStreams();
  }, []);

  const renderStreams = () => {
    return streams.map((eachStream) => {
      return (
        <ul>
          <li>{eachStream.title}</li>
          <li>
            <strong>Name: </strong>
            {eachStream.game_name}
          </li>
          <li>
            <strong>Game Name: </strong>
            {eachStream.user_name}
          </li>
          <li>
            <strong>Type: </strong>
            {eachStream.type}
          </li>
        </ul>
      );
    });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="leader">
      <h1>All Streams</h1>
      <input type="text" placeholder="search stream" onChange={handleChange} />
      {renderStreams()}
    </div>
  );
};

export default LeaderBoard;
