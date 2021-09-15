import ChessTableData from 'components/ChessTableData';
import React from 'react';

const PGNTable = () => (
  <table className="table-auto whitespace-nowrap border-gray-100 border rounded-lg">
    <thead className="bg-gray-100">
      <tr>
        <th><p className="header-text">White</p></th>
        <th><p className="header-text">Black</p></th>
        <th><p className="header-text">Event</p></th>
        <th><p className="header-text">Site</p></th>
        <th><p className="header-text">Result</p></th>
        <th>
          <p className="header-text">Play Game</p>
        </th>
      </tr>
    </thead>
    <ChessTableData />
  </table>
);

export default PGNTable;
