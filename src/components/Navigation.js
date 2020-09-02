import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  // a href를 사용해서 네비게이션을 사용하면 리엑트가 새로고침 될 뿐이다. 따라서 import { Link } from "react-router-dom"을 작성해준 후 -> Link to를 사용해준다.
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
