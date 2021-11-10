import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./homeComponent";
import Explore from "./explore";
import Header from "./header";
import About from "./about";
import Dashboard from "./dashboard";
import { Collapse, Hidden } from "@material-ui/core";
import Footer from "./footer";
export default function MainComponent() {
  return (
    <>
      <Header />
      <div style={{ height: 50 }}></div>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/explore" component={Explore} />
      </Switch>

      <Footer />
    </>
  );
}
