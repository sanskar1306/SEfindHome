import "./App.css";
import React, { useState, useEffect } from "react";
import MainComponent from "./components/main";
import Loader from "./components/loader";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return <MainComponent />;
}

export default App;
