import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';
import {BsSkipEndFill, BsSkipStartFill} from 'react-icons/bs'

const Controls = ({setTurn, game}) => {
  return (
    <div className="flex justify-center">
      <button 
        className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-gray-900 hover:text-gray-900 rounded border border-gray-800 text-gray-800 px-6 py-2 text-xs" 
        onClick={() => setTurn(0)}>
        <BsSkipStartFill style={{margin: '3 3 0 0'}}/>Start
      </button>
      <button
        className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-gray-900 hover:text-gray-900 rounded border border-gray-800 text-gray-800 px-6 py-2 text-xs"
        onClick={() => setTurn(prevState => {
          if (prevState > 0) {
            return prevState - 1
          }
          return prevState
        })}
      ><VscTriangleLeft />Previous</button>
      <button
        className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-gray-900 hover:text-gray-900 rounded border border-gray-800 text-gray-800 px-6 py-2 text-xs"
        onClick={() => setTurn(prevState => {
          if (prevState < game.fens.length - 1) {
            return prevState + 1
          }
          return prevState
        })}
      ><VscTriangleRight />Next</button>
      <button 
        className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-gray-900 hover:text-gray-900 rounded border border-gray-800 text-gray-800 px-6 py-2 text-xs"
        onClick={() => setTurn(game.fens.length - 1)}>
        <BsSkipEndFill />End
      </button>
    </div>
  )
}

export default Controls
