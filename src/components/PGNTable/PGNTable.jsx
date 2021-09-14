import ChessTableData from 'components/ChessTableData'

const PGNTable = () => {
  return (
    <table className="table-auto whitespace-nowrap border-gray-100 border rounded-lg">
      <thead className="bg-gray-100">
        <tr>
          <th className="text-left py-5 rounded-tl-lg"><p className="text-sm font-medium leading-none text-gray-900">White</p></th>
          <th className="text-left py-5 rounded-tl-lg"><p className="text-sm font-medium leading-none text-gray-900">Black</p></th>
          <th className="text-left py-5 rounded-tl-lg"><p className="text-sm font-medium leading-none text-gray-900">Event</p></th>
          <th className="text-left py-5 rounded-tl-lg"><p className="text-sm font-medium leading-none text-gray-900">Site</p></th>
          <th className="text-left py-5 rounded-tl-lg"><p className="text-sm font-medium leading-none text-gray-900">Result</p></th>
          <th className="text-left py-5 rounded-tl-lg">
            <p className="text-sm font-medium leading-none text-gray-900">Play Game</p>
          </th>
        </tr>
      </thead>
      { <ChessTableData/> }
    </table>
  )
}

export default PGNTable
