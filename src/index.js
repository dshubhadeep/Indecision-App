import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import IndecisonApp from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<IndecisonApp />, document.getElementById("root"));

registerServiceWorker();
