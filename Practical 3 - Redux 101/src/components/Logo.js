import React from "react";
import { css } from "glamor";
import picto from "../images/msn.jpg";

const Logo = ({ size = "42px", style = {} }) => (
  <div
    href="#"
    {...css({
      marginTop: "15px",
      width: size,
      height: size,
      borderRadius: "4px",
      display: "inline-block",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${picto})`,
      backgroundSize: "contain",
      ...style
    })}
  />
);

export default Logo;