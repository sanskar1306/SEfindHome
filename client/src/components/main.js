import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./homeComponent";
import Explore from "./explore";
import Header from "./header";
import About from "./about";
import Dashboard from "./dashboard";
import Footer from "./footer";


export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

export default function MainComponent() {
  return (
    <>
      <div data-testid="main">
        <Header />
        <div style={{ height: 50 }}></div>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/explore" component={Explore} />
        </Switch>

        <Footer />
      </div>
    </>
  );
}
