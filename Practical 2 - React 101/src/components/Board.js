import React from "react";
import Cell from "./Cell";

const boardStyle = {
  display: "grid",
  width: "600px",
  grid: "auto-flow dense / 1fr 1fr 1fr",
  gridAutoRows: "auto"
};

const Board = ({
                 cells = [],
                 onClickCell = () => {}
              }) => (
                      <div style={boardStyle}>
                        {cells.map((content, index) => (
                          <Cell
                              key={index}
                              player={content}
                              onClickCell={() => onClickCell(index)}
                          />
                        ))}
                      </div>
                    );

export default Board;