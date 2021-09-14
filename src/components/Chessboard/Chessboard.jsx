import Controls from 'components/Controls'
import PGNTable from 'components/PGNTable'
import Header from 'components/Header/Header'
import MoveCounter from 'components/MoveCounter/MoveCounter'
import Chessboard from 'chessboardjsx';
import { ChessContext } from 'App';
import { useContext } from 'react';

const MyChessboard = () => {
  const {game, turn} = useContext(ChessContext)
  return (
    <>
      <div >
        <div className="flex justify-between">
          <Header white />
          <Header white={false} />
        </div>
        <div style={{marginLeft: '35%'}}>
          <Chessboard calcWidth={screen => {
            return screen.screenWidth * .3
          }} position={game.fens[turn]} />
          <MoveCounter />
          <br/>
        </div>
        <Controls/>
      </div>
      <PGNTable/>
    </>
  )
} 

export default MyChessboard
