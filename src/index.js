import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//component : html을 반환하는 함수
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
//<App/>하나만 선택할수있으며 App안에 많은 component를 넣을 수 있고, 그 component안에 더 많은 component를 import할 수 있다.

/*
If you want your app to work offline and load faster, you can change
unregister() to register() below. Note this comes with some pitfalls.
Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();*/
