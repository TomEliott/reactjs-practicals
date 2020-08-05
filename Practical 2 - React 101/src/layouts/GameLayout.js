import React, { useCallback, useEffect, useState } from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

// Images
import pacman from "../img/Pacman.png";
import ghost from "../img/Ghost1.png";

const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  textAlign: "center",
  margin: "auto",
};

const GameLayout = ( {} ) => {
  const [cells, setCells] = useState(Array(9).fill(' '));
  const [state, setState] = useState("state");
  const [currentPlayer, setCurrentPlayer] = useState("Pac-Man");

  // When we click on a cell
  const handleClick = useCallback(
      (cellIndex) => {
          if (checkWinner()) {
              window.location.reload(); // to reload page
              return;
          }
          if (cells[cellIndex] === ' ') {
              let player = "";
              if (currentPlayer === "Pac-Man") {
                  setCurrentPlayer("Ghost");
                  player = pacman;
              }
              else {
                  setCurrentPlayer("Pac-Man");
                  player = ghost;
              }
              let copy = [...cells];
              copy[cellIndex] = player;
              setCells(copy);
          }
      }, [cells, currentPlayer]);

  /*
  *     Cells :
  *     0 | 1 | 2
  *     3 | 4 | 5
  *     6 | 7 | 8
   */

  // Check the column
  function checkColumn() {
      if (cells[0] !== " " && cells[0] === cells[3] && cells[3] === cells[6])
          return cells[0];
      else if (cells[1] !== " " && cells[1] === cells[4] && cells[4] === cells[7])
          return cells[1];
      else if (cells[2] !== " " && cells[2] === cells[5] && cells[5] === cells[8])
          return cells[2];
      else
          return " ";
  }

  // Check the line
  function checkLine() {
      if (cells[0] !== " " && cells[0] === cells[1] && cells[1] === cells[2])
          return cells[0];
      else if (cells[3] !== " " && cells[3] === cells[4] && cells[4] === cells[5])
          return cells[3];
      else if (cells[6] !== " " && cells[6] === cells[7] && cells[7] === cells[8])
          return cells[6];
      else
          return " ";
  }

  // Check the diagonal
  function checkDiagonal() {
      if (cells[0] !== "" && cells[0] === cells[4] && cells[0] === cells[8])
          return cells[0];
      if (cells[6] !== "" && cells[6] === cells[4] && cells[6] === cells[2])
          return cells[6];
      return " ";
  }

  // Check if the cell array is full
  function checkFull() {
      for (let i = 0; i < cells.length; i++) {
          if (cells[i] === " ")
              return false;
      }
      return true;
  }

  function checkWinner() {
        if (checkFull()) {
            return true;
        }
        else if (checkLine() !== " " || checkColumn() !== " " || checkDiagonal() !== " ") {
            return true;
        }
        return false;
    }

  // Check if someone won or if it's an equality
  useEffect(() => {
      if (checkFull()) {
          setState("equality");
      }
      else if (checkLine() !== " " || checkColumn() !== " " || checkDiagonal() !== " ") {
          if (currentPlayer === "Ghost")
              setState("pc");
          else
              setState("winner");
      }
  });

  return (
    <div style={gameLayoutStyle}>
      <Board onClickCell={(cellIndex) => handleClick(cellIndex)} cells={cells} />
      <GameInfo gameState={state} currentPlayer={currentPlayer} />
    </div>
  );
};

export default GameLayout;