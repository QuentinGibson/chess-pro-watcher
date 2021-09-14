import {useContext, useEffect, useRef} from 'react'
import { ChessContext } from 'App'

const MoveConter = () => {
  const {game, adjustTurn, turn} = useContext(ChessContext)
  const turnInputRef = useRef()
  useEffect(() => {
    if (turnInputRef.current){
      turnInputRef.current.value = turn + 1
    }
  }, [turn])
  return (
    <label className="counter-label" style={{marginLeft: 10, marginTop: 20}}>
      Move
      <input
        className="counter-input"
        type="number"
        ref={turnInputRef}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            const userInput = parseInt(turnInputRef.current.value) - 1
            const inTurnRange = !isNaN(userInput) && (userInput > 0 && userInput < game.fens.length - 1)
            if (inTurnRange) adjustTurn(userInput)
          }
        }} />
      of {game.fens.length}
    </label>
  )
}

export default MoveConter
