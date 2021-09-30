import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homescreen from "./Component/Homescreen";
import Login from "./Component/Login";
import Details from "./Component/Details";
function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/homescreen">
              <Homescreen />
            </Route>
            <Route path="/details">
              <Details />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
