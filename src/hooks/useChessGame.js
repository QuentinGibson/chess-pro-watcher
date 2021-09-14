import useChessMaker from "./useChessMaker"
import database from 'database'
import {useState} from 'react'
import Chess from 'chess.js'

const defaultGame = () => {
  const chess = new Chess()
  const fens = chess.history().map(function (move) {
    chess.move(move);
    return chess.fen()
  })
  chess.header('White', 'Nobody','Black', 'Nobody', 'Event', 'N/A', 'Site', 'N/A', 'Result', 'N/A')
  const headers = chess.header()
  return {fens, headers}
}


export default function useChessGame() {
  const [turn, setTurn] = useState(0)
  const [games] = useChessMaker(database)
  const [game, setGame] = useState(defaultGame)

  function loadGame(game) {
    setGame(game)
  }

  function adjustTurn(turn) {
    setTurn(turn)
  }

  return {turn, adjustTurn, games, game, loadGame}
}
