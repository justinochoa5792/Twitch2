import React, { useState } from "react";
import Axios from "axios";

const GetStreamers = () => {
  const [term, setTerm] = useState([]);
  const [gamer, setGamer] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setTerm(e.target.value);
  };

  //   name's need to be exact for example Shroud or summit1g
  const handleClick = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.twitch.tv/helix/users?login=${term}`,
      {
        headers: {
          Authorization: "Bearer o7slx9f8cby28xwfwj4lbsg5qvo078",
          "Client-ID": "f84xq6cc6obqj2hyjngf973fot90mi",
        },
      }
    );
    console.log(response.data.data);
    setGamer(response.data.data);
  };
  const renderGamer = () => {
    return gamer.map((eachGamer) => {
      return (
        <ul key={eachGamer.display_name}>
          <img src={eachGamer.profile_image_url} alt={eachGamer.display_name} />
          <li>
            <strong>Name:</strong>
            {eachGamer.display_name}
          </li>
          <li>
            <strong>Description:</strong>
            {eachGamer.description}
          </li>
          <li>
            <strong>Views:</strong> {eachGamer.view_count}
          </li>
        </ul>
      );
    });
  };

  return (
    <div className="streamers">
      <h1>Search for Streamers</h1>
      <form>
        <input value={term} onChange={handleChange} />
        <button className="butn" onClick={handleClick}>
          Search
        </button>
        {renderGamer()}
      </form>
    </div>
  );
};

export default GetStreamers;
