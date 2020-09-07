import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";
import AuthUser from "./components/Auth/AuthUser";
import LogoutUser from "./components/Auth/LogoutUser";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />

          <Route exact path="/signup" render={() => <Signup/>} />

          <Route exact path="/login" component={(props) => 
            AuthUser() === false ? <Login {...props} /> : <Redirect to="/profile" />}>
          </Route>

          <Route exact path="/profile" component={() => 
            AuthUser() === true ? <Profile/> : <Redirect to="/login" />}>
          </Route>

          <Route exact path="/logout" component={()=> <Redirect to={LogoutUser()}/>}></Route>

          <Route render={() => <PageNotFound />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
