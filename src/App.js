import MyChessboard from './components/Chessboard/Chessboard'
import PGNTable from './components/PGNTable/PGNTable'
import useChessMaker from './hooks/useChessMaker'

import './App.css'

import chesspgn from './database/magnus.pgn'
import chesspgn2 from './database/ct-2842-2762-2020.3.25.pgn'
import chesspgn3 from './database/game3.pgn'
import chesspgn4 from './database/game4.pgn'
import chesspgn5 from './database/game5.pgn'
import chesspgn6 from './database/game6.pgn'
import { useState } from 'react'

function App() {
  const [games] = useChessMaker([chesspgn, chesspgn2, chesspgn3, chesspgn4, chesspgn5, chesspgn6])
  const [game, setGame] = useState(games[0])
  const [turn, setTurn] = useState(0)

  return (
    <div className="py-8 flex items-stretch justify-center w-full">
      <main className="">
        <h1 className="mb-20 text-7xl md:px-0 px-4 font-medium tracking-widest leading-none text-center text-gray-800 uppercase">Chess Pro Watcher</h1>
        <div class="flex justify-center flex-col">
          <MyChessboard game={game} turn={turn} setTurn={setTurn}/>
          <PGNTable games={games} setGame={setGame}/>
        </div>
      </main>
    </div>
  )
}

export default App
