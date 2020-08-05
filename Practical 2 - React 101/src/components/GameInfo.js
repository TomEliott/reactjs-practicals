import React from "react";

const defaultStyle = {
     color: "white",
     textAlign: "center",
};

const winner = {
     color: "yellow",
     textAlign: "center",
};

const equality = {
     color: "orange",
     textAlign: "center",
};

const GameInfo = ({
     gameState = "state",
     currentPlayer = "unknown",
     onClick = () => {},
     }) => (
         (gameState === "state")?
               <h1 onClick={onClick} style={defaultStyle}>It's your turn {currentPlayer} 🚀</h1>:
         (gameState === "equality")?
               <h1 onClick={onClick} style={equality}>There is an equality 🚫</h1>:
         (gameState === "pc")?
             <h1 onClick={onClick} style={winner}>Congratulations, Pac-Man has won! 🎉</h1>:
         <h1 onClick={onClick} style={winner}>Congratulations, Ghosts have won! 🎉</h1>
     );

export default GameInfo;