import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";

import "./styles/style.css";
import { AppComponent } from "@components";
import CONFIG from "@config";
import { BrowserRouter } from "react-router-dom";

// if (CONFIG.sentryDSN) {
//   Sentry.init({ dsn: CONFIG.sentryDSN });
// }

ReactDOM.render(
  <BrowserRouter>
    <AppComponent />
  </BrowserRouter>,
  document.getElementById("root")
);
