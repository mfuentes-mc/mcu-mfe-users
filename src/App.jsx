
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import UsersRouters from './routers/UsersRouters';

const App = () => (
  <div>
    <BrowserRouter>
      <UsersRouters/>
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
    