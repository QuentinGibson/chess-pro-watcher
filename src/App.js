import './App.css';
import Chessboard from 'chessboardjsx';
import chesspgn from './database/magnus.pgn';
import chesspgn2 from './database/ct-2842-2762-2020.3.25.pgn'
import Chess from 'chess.js'
import { useEffect, useRef, useState } from 'react';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';
import {BsSkipEndFill, BsSkipStartFill} from 'react-icons/bs'

const createGame = (pgn) => {
  const chess = new Chess()
  chess.load_pgn(pgn)
  const chess1 = new Chess()
  const fens = chess.history().map(function (move) {
    chess1.move(move);
    return chess1.fen();
  });
  const headers = chess.header()
  return {fens, headers}
}

const pgnList = [chesspgn, chesspgn2]
const gameList = pgnList.map(pgn => createGame(pgn))


function App() {
  const [games, setGames] = useState([])
  const [game, setGame] = useState(null)
  const [turn, setTurn] = useState(0)
  const turnInputRef = useRef();
  const playTimerRef = useRef();
  useEffect(() => {
    setGames(gameList)
  }, [])
  useEffect(() => {
    if (turnInputRef.current){
      turnInputRef.current.value = turn + 1
    }
  }, [turn])
 
  const MyChessboard = () => {
    const Controls = () => {
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
      if (game) {
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
            <Controls />
            <label style={{ marginLeft: 552, marginTop: 20 }} className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
              Move Every
              <input type="number" value={1} ref={playTimerRef} className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 mx-2 font-normal w-10 h-10 items-center pl-3 text-sm border-gray-300 border shadow" />
              's
            </label>
              <button 
                className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-gray-900 hover:text-gray-900 rounded border border-gray-800 text-gray-800 px-6 py-2 text-xs">
                Start
              </button>
              <button
                className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-gray-900 hover:text-gray-900 rounded border border-gray-800 text-gray-800 px-6 py-2 text-xs"
                >Stop</button>
          </div>
        )
      } else {
        return (
          <div>
            <div style={{marginLeft: 250}}>
              <Chessboard calcWidth={(screenWidth, screenHeight) => 750} />
            </div>
            <Controls />
          </div>
        )
      }
  }
  const PGNTable = ({games}) => {
    const ChessTableData = () => {
      return games.map((game, index) => {
        const even = index % 2 === 0
        const {White, Black, Event, Site, Result} = game.headers
        if (even) {
        return (
          <tbody>
            <tr>
              <td className="pb-5 pt-8 pr-20 pl-4">{White}</td>
              <td className="pb-5 pt-8 pr-20 pl-4">{Black}</td>
              <td className="pb-5 pt-8 pr-20 pl-4">{Event}</td>
              <td className="pb-5 pt-8 pr-20 pl-4">{Site}</td>
              <td className="pb-5 pt-8 pr-20 pl-4">{Result}</td>
              <td className="pb-5 pt-8 pr-20 pl-4">
                <button className="text-base font-bold leading-none underline text-center text-gray-900 hover:text-indigo-700" onClick={() => setGame(game)}>
                  Load Game
                </button>
              </td>
            </tr>
          </tbody>
        )
        } else {
          return (
            <tbody>
              <tr className="bg-gray-100">
                <td className="pb-5 pt-8 pr-20 pl-4">{White}</td>
                <td className="pb-5 pt-8 pr-20 pl-4">{Black}</td>
                <td className="pb-5 pt-8 pr-20 pl-4">{Event}</td>
                <td className="pb-5 pt-8 pr-20 pl-4">{Site}</td>
                <td className="pb-5 pt-8 pr-20 pl-4">{Result}</td>
                <td className="pb-5 pt-8 pr-20 pl-4">
                  <button 
                    className="text-base font-bold leading-none underline text-center text-gray-900 hover:text-indigo-700"
                    onClick={() => setGame(game)}>
                    Load Game
                  </button>
                </td>
              </tr>
            </tbody>
          )
        }
      })
    }
    return (
      <table className="w-full whitespace-nowrap border-gray-100 border rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left py-5 pl-4 rounded-tl-lg"><p className="text-sm font-medium leading-none text-gray-900">White</p></th>
            <th className="text-left py-5 pl-4 rounded-tl-lg"><p className="text-sm font-medium leading-none text-gray-900">Black</p></th>
            <th className="text-left py-5 pl-4 rounded-tl-lg"><p className="text-sm font-medium leading-none text-gray-900">Event</p></th>
            <th className="text-left py-5 pl-4 rounded-tl-lg"><p className="text-sm font-medium leading-none text-gray-900">Site</p></th>
            <th className="text-left py-5 pl-4 rounded-tl-lg"><p className="text-sm font-medium leading-none text-gray-900">Result</p></th>
            <th className="text-left py-5 pl-4 rounded-tl-lg">
              <p className="text-sm font-medium leading-none text-gray-900">Play Game</p>
            </th>
          </tr>
        </thead>
        <ChessTableData/>
      </table>
    )
  }

  return (
    <div className="py-8 flex items-stretch justify-center w-full">
      <main className="">
        <h1 className="mb-20 text-7xl md:px-0 px-4 font-medium tracking-widest leading-none text-center text-gray-800 uppercase">Chess Pro Watcher</h1>
        <div class="flex justify-center flex-col">
          <MyChessboard/>
          <PGNTable games={games}/>
        </div>
      </main>
    </div>
  );
}

export default App;
