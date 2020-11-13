import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import TopGames from "./components/TopGames";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/topgames"
          render={(props) => <TopGames {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;

// https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=f84xq6cc6obqj2hyjngf973fot90mi&redirect_uri=http://localhost:3000/&scope=viewing_activity_read
