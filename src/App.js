import './App.css';
import Chessboard from 'chessboardjsx';
import chesspgn from './database/magnus.pgn';
import Chess from 'chess.js'
import { useState } from 'react';

function App() {
  const chess = new Chess()
  chess.load_pgn(chesspgn)
  const getMovesAsFENs = (chessObj) => {
    const chess1 = new Chess()
    return chessObj.history().map(function (move) {
      chess1.move(move);
      return chess1.fen();
    });
  }
  let [turn, setTurn] = useState(0)
  let moves = getMovesAsFENs(chess)
  return (
    <div className="App">
      <main className="App-header">
        <h1 className="text-5xl">Chess Openings Trainer</h1>
        <div>
          <Chessboard position={moves[turn]}/>
          <button onClick={() => setTurn(0)}>Start</button>
          <button onClick={() => setTurn(prevState => prevState - 1)}>Previous</button>
          <button onClick={() => setTurn(prevState => prevState + 1)}>Next</button>
        </div>
      </main>
    </div>
  );
}

export default App;
