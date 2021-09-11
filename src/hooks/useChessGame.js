import useChessMaker from "./useChessMaker"

export default function (gameList) {
  const [turn, setTurn] = useState(0)
  const [games] = useChessMaker(newGameList)
  const [game, setGame] = useState(games[0])

  return {turn, setTurn, games, game, setGame}
}
