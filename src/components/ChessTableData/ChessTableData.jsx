const ChessTableData = ({ games, setGame }) => {
  return games.map((game, index) => {
    const even = index % 2 === 0
    const {White, Black, Event, Site, Result} = game.headers
    if (even) {
      return (
        <tbody>
          <tr>
            <td className="pb-5 pt-8 pr-20 pl-4">{White}</td>
            <td className="pb-5 pt-8 pr-20 pl-4">{Black}</td>
            <td className="pb-5 pt-8 pr-20 pl-4">{Event}</td>
            <td className="pb-5 pt-8 pr-20 pl-4">{Site}</td>
            <td className="pb-5 pt-8 pr-20 pl-4">{Result}</td>
            <td className="pb-5 pt-8 pr-20 pl-4">
              <button className="text-base font-bold leading-none underline text-center text-gray-900 hover:text-indigo-700" onClick={() => setGame(game)}>
                Load Game
              </button>
            </td>
          </tr>
        </tbody>
      )
    } else {
      return (
        <tbody>
          <tr className="bg-gray-100">
            <td className="pb-5 pt-8 pr-20 pl-4">{White}</td>
            <td className="pb-5 pt-8 pr-20 pl-4">{Black}</td>
            <td className="pb-5 pt-8 pr-20 pl-4">{Event}</td>
            <td className="pb-5 pt-8 pr-20 pl-4">{Site}</td>
            <td className="pb-5 pt-8 pr-20 pl-4">{Result}</td>
            <td className="pb-5 pt-8 pr-20 pl-4">
              <button 
                className="text-base font-bold leading-none underline text-center text-gray-900 hover:text-indigo-700"
                onClick={() => setGame(game)}>
                Load Game
              </button>
            </td>
          </tr>
        </tbody>
      )
    }
  })
}

export default ChessTableData