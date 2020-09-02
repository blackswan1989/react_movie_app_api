import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  //url을 이용해서 path를 지정해 줄 수 있다.
  //exact={true}는 url이 겹치지 않게 url이 "/"일때만 home렌더링을 해준다.
  //Navigation은 HashRouter안에서만 사용해주어야 Link to가 정상적으로 작동된다.
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
