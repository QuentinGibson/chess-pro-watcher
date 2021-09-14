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


const useChessMaker = (rawChessList) => {
  const [games, setGames] = useState([])
  useEffect(() => {
    const newGameList = rawChessList.map(game => createGame(game))
    setGames(newGameList)
  }, [rawChessList])

  return [ games ]
}

export default useChessMaker
