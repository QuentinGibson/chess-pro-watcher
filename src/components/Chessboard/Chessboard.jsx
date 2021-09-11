import Controls from 'components/Controls'
import PGNTable from 'components/PGNTable'
import Header from 'components/Header'
import MoveCounter from 'components/MoveCounter'
import Chessboard from 'chessboardjsx';
import useChessGame from 'hooks/useChessGame';


const MyChessboard = () => {
  const {game} = useChessGame()
  return (
    <>
      <div >
        <div className="flex justify-between">
          <Header white />
          <Header white={false} />
        </div>
        <div style={{marginLeft: '35%'}}>
          <Chessboard calcWidth={screen => {
            console.log(screen)
            return screen.screenWidth * .3
          }} position={game.fens[turn]} />
          <MoveCounter />
          <br/>
        </div>
        <Controls/>
      </div>
      <PGNTable />
    </>
  )
} 

export default MyChessboard
