import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "../js/pages/Navbar";
import HomePage from "./pages/HomePage";
import PackagingForm from "./pages/PackagingForm";
import "../css/bootstrap.css";

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <div className="container pt-5">
        <Switch>
          <Route
            path="/packagings/:id"
            exact
            render={(props) => <PackagingForm {...props} />}
          />
          <Route path="/" render={() => <HomePage />} />
        </Switch>
      </div>
    </HashRouter>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
