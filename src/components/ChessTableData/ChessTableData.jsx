import React, { useContext } from 'react';
import { ChessContext } from 'App';
import './style.css';

const ChessTableData = () => {
  const { loadGame, games, adjustTurn } = useContext(ChessContext);
  const gameList = games.map((game, index) => {
    const even = index % 2 === 0;
    const trClass = even ? '' : 'bg-gray-100';
    const {
      White, Black, Event, Site, Result,
    } = game.headers;
    return (
      <tbody>
        <tr className={trClass}>
          <td className="table-cell"><p className="text-sm">{White}</p></td>
          <td className="table-cell"><p className="text-sm">{Black}</p></td>
          <td className="table-cell">{Event}</td>
          <td className="table-cell">{Site}</td>
          <td className="table-cell">{Result}</td>
          <td className="table-cell">
            <button
              type="button"
              className="btn-active"
              onClick={() => {
                adjustTurn(0);
                loadGame(game);
              }}
            >
              Load Game
            </button>
          </td>
        </tr>
      </tbody>
    );
  });
  return (
    <>
      {gameList}
    </>
  );
};

export default ChessTableData;
