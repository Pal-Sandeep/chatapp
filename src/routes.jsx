import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/home/HomeScreen";
import LoginScreen from "./screens/auth/login/LoginScreen";
import SignupScreen from "./screens/auth/signup/SignupScreen";
import AppPaths from "./lib/appPaths";

export default class Routesx extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />  // Render HomeScreen at the root path
          <Route path="/c/:chatId" element={<HomeScreen />} />  // Render HomeScreen at the root path
          <Route path="/login" element={<LoginScreen />} />  // Render HomeScreen at the root path
          <Route path="/signup" element={<SignupScreen />} />  // Render HomeScreen at the root path
          {/* <Route path={AppPaths.HOME} exact component={HomeScreen} /> */}
          {/* <Route path={AppPaths.CHAT_ROOM} exact component={HomeScreen} /> */}
          {/* <Route path={AppPaths.LOGIN} exact component={LoginScreen} /> */}
          {/* <Route path={AppPaths.SIGN_UP} exact component={SignupScreen} /> */}
        </Routes>
      </Router>
    );
  }
}