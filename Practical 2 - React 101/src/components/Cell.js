import React, { useCallback, useState } from "react";

import default_img from "../img/Defaultimg.png";
import ghost1 from "../img/Ghost1.png";
import ghost2 from "../img/Ghost2.png";
import ghost3 from "../img/Ghost3.png";
import ghost4 from "../img/Ghost4.png";

const cellStyle1 = {
  display: "block",
  backgroundColor: "black",
  width: "200px",
  height: "200px",
  border: "1px solid #0d44f6",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

const cellStyle2 = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

let random = Math.floor(Math.random() * 6) + 1;

const Cell = ({ player = "default_img", onClickCell = () => {} }) => {
  const [cellStyle, setCellStyle] = useState(cellStyle1);
  const setStyle1 = useCallback(() => {setCellStyle(cellStyle1)}, []);
  const setStyle2 = useCallback(() => {setCellStyle(cellStyle2)}, []);

  if (player === ghost1) {
    const ghosts = [ghost1, ghost2, ghost3, ghost4];
    player = ghosts[Math.floor(Math.random() * ghosts.length)];
  }

  return (
      <div style={cellStyle}
           onClick={onClickCell}
           onMouseOver={setStyle2}
           onMouseOut={setStyle1}>
        <img src={player} alt="" height="100%" width="100%"/>
      </div>);
}

export default Cell;