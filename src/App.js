import MyChessboard from 'components/Chessboard/Chessboard'
import {createContext} from 'react'
import useChessGame from 'hooks/useChessGame';
import 'App.css'

export const ChessContext = createContext()
export default function App() {
  const chessGameObject = useChessGame()
  return (
    <ChessContext.Provider value={chessGameObject}>
      <div className="py-8 flex items-stretch justify-center w-full">
        <main className="">
          <h1 className="mb-20 text-7xl md:px-0 px-4 font-medium tracking-widest leading-none text-center text-gray-800 uppercase">Chess Pro Watcher</h1>
          <div class="flex justify-center flex-col">
            <MyChessboard />
          </div>
        </main>
      </div>
    </ChessContext.Provider>
  )
}
