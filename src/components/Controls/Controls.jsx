import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';
import {BsSkipEndFill, BsSkipStartFill} from 'react-icons/bs'
import { useContext } from 'react';
import { ChessContext } from 'App';
import './style.css'

const Controls = () => {
  const {game, adjustTurn} = useContext(ChessContext)
  return (
    <div className="flex justify-center">
      <button 
        className="btn-control" 
        onClick={() => adjustTurn(0)}>
        <BsSkipStartFill style={{margin: '3 3 0 0'}}/>Start
      </button>
      <button
        className="btn-control"
        onClick={() => adjustTurn(prevState => {
          if (prevState > 0) {
            return prevState - 1
          }
          return prevState
        })}
      ><VscTriangleLeft />Previous</button>
      <button
        className="btn-control"
        onClick={() => adjustTurn(prevState => {
          if (prevState < game.fens.length - 1) {
            return prevState + 1
          }
          return prevState
        })}
      ><VscTriangleRight />Next</button>
      <button 
        className="btn-control"
        onClick={() => adjustTurn(game.fens.length - 1)}>
        <BsSkipEndFill />End
      </button>
    </div>
  )
}

export default Controls
