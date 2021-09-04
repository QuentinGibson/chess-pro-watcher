import { useState } from 'react'
import Controls from 'components/Controls'
import PGNTable from 'components/PGNTable'
import Header from 'components/Header'
import MoveCounter from 'components/MoveCounter'
import useChessMaker from 'hooks/useChessMaker'
import newGameList from 'database'
import Chessboard from 'chessboardjsx';

const MyChessboard = () => {
  const [turn, setTurn] = useState(0)
  const [games] = useChessMaker(newGameList)
  const [game, setGame] = useState(games[0])
  return (
    <>
      <div >
        <div className="flex justify-between">
          <Header white name={game.headers.White}/>
          <Header white={false} name={game.headers.Black} />
        </div>
        <div style={{marginLeft: '35%'}}>
          <Chessboard calcWidth={screen => {
            console.log(screen)
            return screen.screenWidth * .3
          }} position={game.fens[turn]} />
          <MoveCounter turn={turn} setTurn={setTurn} game={game}/>
          <br/>
        </div>
        <Controls setTurn={setTurn} game={game}/>
      </div>
      <PGNTable games={games} setGame={setGame}/>
    </>
  )
} 

export default MyChessboard
