import './App.css';
import Chessboard from 'chessboardjsx';
import chesspgn from './database/magnus.pgn';
import chesspgn2 from './database/ct-2842-2762-2020.3.25.pgn'
import Chess from 'chess.js'
import { useEffect, useState } from 'react';

const getMovesAsFENs = (chessObj) => {
  const chess1 = new Chess()
  return chessObj.history().map(function (move) {
    chess1.move(move);
    return chess1.fen();
  });
}

function App() {
  const [games, setGames] = useState([])
  const [game, setGame] = useState(null)
  const [player, setPlayer] = useState(null)
  const [opponent, setOpponent] = useState(null)
  const [players, setPlayers] = useState([])
  const [turn, setTurn] = useState(0)

  const initializeFirstPlayers = (player) => {
    let playerGames = games.filter(game => {
      const {White, Black} = game.headers
      return (White === player) || (Black === player)
    })
    const opponents = playerGames.map(game => {
      const {White, Black} = game.headers
      if (White === player) {
        return (
          Black
        )
      } else {
        return (
          White
        )
      }
    })
    setPlayer(player)
    setOpponent(opponents[0])
  }

  useEffect(() => {
    const gameList = [chesspgn, chesspgn2]
    for (let game of gameList) {
      const chess = new Chess()
      chess.load_pgn(game)
      const fens = getMovesAsFENs(chess)
      const headers = chess.header()
      const {White, Black} = headers
      setPlayers(prevState => {
        const players = [...prevState]
        if (!prevState.includes(White)) {
          players.push(White)
        }
        if (!prevState.includes(Black)) {
          players.push(Black)
        }
        return players
      })
      initializeFirstPlayers(players[0])
      setGames(prevState => {
        if (!prevState.includes({fens, headers}))
          return [...prevState, { fens, headers }]
       } )
    }
  }, [])
  const chessboard = () => {
      if (game) {
        return (
          <Chessboard position={game.fens[turn]} />
        )
      } else {
        return <Chessboard/>
      }
  }

  const playerSelector = () => {
    const playerOptions = players.map(player => {
      return (
        <option value={player}>{player}</option>
      )
    })
    return (
      <select name="players" id="players" onChange={e => setPlayer(e.target.value)}>
        {playerOptions}
      </select>
    )
  }

  const opponentSelector = () => {
    let playerGames = games.filter(game => {
      const {White, Black} = game.headers
      return (White === player) || (Black === player)
    })
    const opponents = playerGames.map(game => {
      const {White, Black} = game.headers
      if (White === player) {
        return (
          <option value={Black} >{Black}</option>
        )
      } else {
        return (
          <option value={White} >{White}</option>
        )
      }
    })
    return (
      <select name="opponents" id="opponents" onChange={e => setOpponent(e.target.value)} >
        {opponents}
      </select>
    )
  }

  const eventSelector = () => {
    const gamesOfInterest = games.filter(game => {
      const {White, Black} = game.headers
      if ((player === White && opponent === Black) || (player === Black && opponent === White)) {
        return true
      }
      return false
    })
    const gameOptions = gamesOfInterest.map(game => {
      return (
        <option value={game.fens}>{game.headers.Event} - {game.headers.Round}</option>
      )
    })
    return (
      <select name="games" id="games">
        {gameOptions}
      </select>
    )
  }

  return (
    <div className="App">
      <main className="App-header">
        <h1 className="text-5xl">Chess Openings Trainer</h1>
        <div>
          {chessboard()}
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
          {playerSelector()}
          {opponentSelector()}
          {eventSelector()}
          <button onClick={() => setGame(games[0])}>Set Game</button>
        </div>
      </main>
    </div>
  );
}

export default App;
