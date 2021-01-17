import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
      </Router>
     
    </div>
  );
}

export default App;
