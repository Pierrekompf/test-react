import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PackagingForm from "./pages/PackagingForm";
import "../css/bootstrap.css";

const App = () => {
  return (
    <div className="container">
      <HashRouter>
        <Switch>
          <Route
            path="/packagings/:id"
            exact
            render={(props) => <PackagingForm {...props} />}
          />
          <Route path="/" render={() => <HomePage />} />
        </Switch>
      </HashRouter>
    </div>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
