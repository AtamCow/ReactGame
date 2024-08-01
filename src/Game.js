import React, { useState } from 'react';
import './Game.css';

const Game = () => {
  const [pointsA, setPointsA] = useState(1);
  const [pointsB, setPointsB] = useState(1);

  const increasePoints = () => {
    const random = Math.random();
    if (random < 0.5) {
      setPointsA(pointsA + 1);
    } else {
      setPointsB(pointsB + 1);
    }
  };

  const resetGame = () => {
    setPointsA(1);
    setPointsB(1);
  };

  let status;
  if (pointsA > pointsB) {
    status = 'A is winning';
  } else if (pointsA < pointsB) {
    status = 'B is winning';
  } else {
    status = 'Same point';
  }

  const renderBlocks = (points) => {
    let blocks = [];
    for (let i = 0; i < points; i++) {
      blocks.push(<div key={i} className="point-block"></div>);
    }
    return blocks;
  };

  return (
    <div className="game">
      <h1 className="status">{status}</h1>
      <div className="character">
        <h2 className="character-name">Character A</h2>
        <div className="points">{renderBlocks(pointsA)}</div>
      </div>
      <div className="character">
        <h2 className="character-name">Character B</h2>
        <div className="points">{renderBlocks(pointsB)}</div>
      </div>
      <button onClick={increasePoints} className="button">Race</button>
      {(pointsA > 1 || pointsB > 1) && <button onClick={resetGame} className="button">Reset</button>}
    </div>
  );
};

export default Game;
