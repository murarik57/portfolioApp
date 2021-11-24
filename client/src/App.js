import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import { loadUserStart } from "./actions/auth.action";
import Routes from "./components/routing/Routes";
//redux
import { Provider } from "react-redux";
import Store from "./redux/store";
import setAuthToken from "./utils/setAuthToken.utils";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    Store.dispatch(loadUserStart());
  }, []);

  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
