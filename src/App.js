import './App.css';
import Chessboard from 'chessboardjsx';
import chesspgn from './database/magnus.pgn';
import chesspgn2 from './database/ct-2842-2762-2020.3.25.pgn'
import Chess from 'chess.js'
import { useEffect, useState } from 'react';

const createGame = (pgn) => {
  const chess = new Chess()
  chess.load_pgn(pgn)
  const chess1 = new Chess()
  const fens = chess.history().map(function (move) {
    chess1.move(move);
    return chess1.fen();
  });
  const headers = chess.header()
  return {fens, headers}
}

function App() {
  const [games, setGames] = useState([])
  const [game, setGame] = useState(null)
  const [turn, setTurn] = useState(0)
  useEffect(() => {
    const pgnList = [chesspgn, chesspgn2]
    for (let pgn of pgnList) {
      const game = createGame(pgn)
      setGames(prevState => { return [...prevState, game] } )
    }
  }, [])
  const MyChessboard = () => {
    const Controls = () => {
      return (
        <div>
          <button onClick={() => setTurn(0)}>Start</button>
          <button
            onClick={() => setTurn(prevState => {
              if (prevState > 0) {
                return prevState - 1
              }
              return prevState
            })}
          >Previous</button>
          <button
            onClick={() => setTurn(prevState => {
              if (prevState < game.fens.length - 1) {
                return prevState + 1
              }
              return prevState
            })}
          >Next</button>
          <button onClick={() => setTurn(game.fens.length - 1)}>End</button>
        </div>
      )
    }
      if (game) {
        return (
          <div>
            <Chessboard position={game.fens[turn]} />
            <Controls />
          </div>
        )
      } else {
        return (
          <div>
            <Chessboard />
            <Controls />
          </div>
        )
      }
  }
  const PGNTable = ({games}) => {
    const chessTableData = () => {
      return games.map(game => {
        const {White, Black, Event, Site, Result} = game.headers
        return (
          <tr>
            <td>{White}</td>
            <td>{Black}</td>
            <td>{Event}</td>
            <td>{Site}</td>
            <td>{Result}</td>
            <td><button onClick={() => setGame(game)}>Load Game</button></td>
          </tr>
        )
      })
    }
    return (
      <table>
        <tr>
          <th>White</th>
          <th>Black</th>
          <th>Event</th>
          <th>Site</th>
          <th>Result</th>
        </tr>
        {chessTableData()}
      </table>
    )
  }

  return (
    <div className="App">
      <main className="App-header">
        <h1 className="text-5xl">Chess Openings Trainer</h1>
        <div>
          <MyChessboard/>
          <PGNTable games={games}></PGNTable>
        </div>
      </main>
    </div>
  );
}

export default App;
