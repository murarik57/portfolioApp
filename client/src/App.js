import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Alert from "./components/layout/Alert";
import { loadUserStart } from "./actions/auth.action";
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
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>

          <section className="container">
            <Alert />
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </section>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
