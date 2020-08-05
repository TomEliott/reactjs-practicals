import React from "react";
import { Provider } from "react-redux";
import Messages from "./Messages";
import "antd/dist/antd.css";

export default function Root(props) {
  return (
    <Provider store={props.store}>
      <Messages />
    </Provider>
  );
}