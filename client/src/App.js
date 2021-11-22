import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
//redux
import { Provider } from "react-redux";
import Store from "./redux/store";

const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
