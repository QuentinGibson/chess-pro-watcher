import ChessTableData from '../ChessTableData'

const PGNTable = ({games, setGame}) => {
  return (
    <table className="w-full whitespace-nowrap border-gray-100 border rounded-lg">
      <thead className="bg-gray-100">
        <tr>
          <th className="text-left py-5 pl-4 rounded-tl-lg"><p className="text-sm font-medium leading-none text-gray-900">White</p></th>
          <th className="text-left py-5 pl-4 rounded-tl-lg"><p className="text-sm font-medium leading-none text-gray-900">Black</p></th>
          <th className="text-left py-5 pl-4 rounded-tl-lg"><p className="text-sm font-medium leading-none text-gray-900">Event</p></th>
          <th className="text-left py-5 pl-4 rounded-tl-lg"><p className="text-sm font-medium leading-none text-gray-900">Site</p></th>
          <th className="text-left py-5 pl-4 rounded-tl-lg"><p className="text-sm font-medium leading-none text-gray-900">Result</p></th>
          <th className="text-left py-5 pl-4 rounded-tl-lg">
            <p className="text-sm font-medium leading-none text-gray-900">Play Game</p>
          </th>
        </tr>
      </thead>
      <ChessTableData games={games} setGame={setGame}/>
    </table>
  )
}

export default PGNTable
