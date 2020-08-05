import React from "react";
import { Link } from "react-router";
import { css } from "glamor";

const containerStyle = css({
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

const NoMatch = ({ message }) => (
  <div {...containerStyle}>
    <h1>404</h1>
    <h2>Page not found</h2>
    <p>{message}</p>
    <Link to="/">Back to start</Link>
  </div>
);

export default NoMatch;
