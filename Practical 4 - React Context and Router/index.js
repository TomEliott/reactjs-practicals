import React from "react";
import { render } from "react-dom";

import Root from "./layouts/root";
import { store } from "./store";

render(<Root store={store} />, document.getElementById("root"));
