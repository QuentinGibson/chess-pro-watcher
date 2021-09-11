import {useEffect, useRef} from 'react'
import useChessGame from 'hooks/useChessGame'

const MoveConter = () => {
  const {turn, setTurn, game} = useChessGame()
  const turnInputRef = useRef()
  useEffect(() => {
    if (turnInputRef.current){
      turnInputRef.current.value = turn + 1
    }
  }, [turn])
  return (
    <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2" style={{marginLeft: 320, marginTop: 20}}>
      Move
      <input
        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 mx-2 font-normal w-10 h-10 items-center pl-3 text-sm border-gray-300 rounded border shadow"
        type="number"
        ref={turnInputRef}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            const userInput = parseInt(turnInputRef.current.value) - 1
            if (!isNaN(userInput) && (userInput > 0 && userInput < game.fens.length - 1)) setTurn(userInput)
          }
        }} />
      of {game.fens.length}
    </label>
  )
}

export default MoveConter
