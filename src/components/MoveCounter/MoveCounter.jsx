import React, { useContext, useEffect, useRef } from 'react';
import { ChessContext } from 'App';

const MoveConter = () => {
  const { game, adjustTurn, turn } = useContext(ChessContext);
  const turnInputRef = useRef();
  useEffect(() => {
    if (turnInputRef.current) {
      turnInputRef.current.value = turn + 1;
    }
  }, [turn]);
  return (
    <label htmlFor="counter" className="counter-label" style={{ marginLeft: 10, marginTop: 20 }}>
      Move
      <input
        id="counter"
        className="counter-input"
        type="number"
        ref={turnInputRef}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            const userInput = parseInt(turnInputRef.current.value, 10) - 1;
            const isNumber = !Number.isNaN(userInput);
            const inTurnRange = isNumber && (userInput > 0 && userInput < game.fens.length - 1);
            if (inTurnRange) adjustTurn(userInput);
          }
        }}
      />
      of
      {' '}
      {game.fens.length}
    </label>
  );
};

export default MoveConter;
