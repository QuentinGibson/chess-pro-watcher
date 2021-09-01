import {useState, useEffect} from 'react'
import Chess from 'chess.js'

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

const defaultGame = (() => {
  const chess = new Chess()
  const fens = chess.history().map(function (move) {
    chess.move(move);
    return chess.fen()
  })
  chess.header('White', 'Nobody','Black', 'Nobody', 'Event', 'N/A', 'Site', 'N/A', 'Result', 'N/A')
  const headers = chess.header()
  return {fens, headers}
})()

const useChessMaker = (rawChessList) => {
  const [games, setGames] = useState([defaultGame])
  const newGameList = rawChessList.map(game => createGame(game))
  useEffect(() => {
    setGames(newGameList)
  }, [])

  return [ games ]
}

export default useChessMaker
