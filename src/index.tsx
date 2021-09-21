import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Router from "./router";

import { basename } from "./config";

ReactDOM.render(
  <BrowserRouter basename={basename}>
    <Layout>
      <Router />
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);
