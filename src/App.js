import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  //url을 이용해서 path를 지정해줄수있다.
  return (
    <HashRouter>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  ); //#6 ROUTING BONUS 6.1 | 2:50
}

export default App;
