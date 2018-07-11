import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import IndecisonApp from "./App";
import CounterApp from "./Counter";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<IndecisonApp />, document.getElementById("root"));

registerServiceWorker();
