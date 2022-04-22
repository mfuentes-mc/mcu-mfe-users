
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import UsersRouters from './routers/UsersRouters';

const App = () => (
  <div>
    <UsersRouters/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
    