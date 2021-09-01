import { useEffect, useState, useRef } from 'react'
import Chessboard from 'chessboardjsx';
import Controls from '../Controls'

const MyChessboard = ({game, turn, setTurn}) => {
  useEffect(() => {
    if (turnInputRef.current){
      turnInputRef.current.value = turn + 1
    }
  }, [turn])
  const turnInputRef = useRef()
    return (
      <div >
        <div className="flex justify-between">
          <div className=" border border-gray-300  h-8 w-5/12 mb-4 rounded-md flex items-center justify-center">
            <div className="flex items-center">
              <p className="text-xs text-gray-800 dark:text-gray-400 font-normal">White: {game.headers.White}</p>
            </div>
          </div>
          <div className="border border-gray-300  h-8 w-5/12 bg-gray-900  mb-4 rounded-md flex items-center justify-center">
            <div className="flex items-center">
              <p className="text-xs text-gray-100 dark:text-gray-400 font-normal">Black: {game.headers.Black}</p>
            </div>
          </div>
        </div>
        <div style={{marginLeft: 250}}>
          <Chessboard calcWidth={(screenWidth, screenHeight) => 750} position={game.fens[turn]} />
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
          <br/>
        </div>
        <Controls setTurn={setTurn} game={game}/>
      </div>
    )
  } 

export default MyChessboard
