import { useContext } from 'react'
import { ChessContext } from 'App'

const ChessTableData = () => {
  const {loadGame, games, adjustTurn} = useContext(ChessContext)
  const gameList = games.map((game, index) => {
    const even = index % 2 === 0
    const trClass = even ? "" : "bg-gray-100"
    const { White, Black, Event, Site, Result } = game.headers
    return (
      <tbody>
        <tr className={trClass}>
          <td className="pb-5 pt-8 pr-5 pl-4"><p className="text-sm">{White}</p></td>
          <td className="pb-5 pt-8 pr-5 pl-4"><p className="text-sm">{Black}</p></td>
          <td className="pb-5 pt-8 pr-5 pl-4">{Event}</td>
          <td className="pb-5 pt-8 pr-5 pl-4">{Site}</td>
          <td className="pb-5 pt-8 pr-5 pl-4">{Result}</td>
          <td className="pb-5 pt-8 pr-5 pl-4">
            <button className="text-base font-bold leading-none underline text-center text-gray-900 hover:text-indigo-700" onClick={() => {
              adjustTurn(0)
              loadGame(game)
            }}>
              Load Game
            </button>
          </td>
        </tr>
      </tbody>
    )
  })
  return (
    <>
      {gameList}
    </>
  )
}

export default ChessTableData
