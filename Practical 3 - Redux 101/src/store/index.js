import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducers } from "../reducers";

const reducer = combineReducers({
  ...reducers
});

const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export const store = finalCreateStore(reducer);
