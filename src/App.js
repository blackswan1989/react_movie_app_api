import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";

function App() {
  return (
    <HashRouter>
      <Route path="/about" component={About} />
    </HashRouter>
  ); //#6 ROUTING BONUS 6.1 | 2:50
}

export default App;
