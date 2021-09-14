import {createGame} from 'utils'
import gamePGN from 'database/magnus.pgn'

it("creates a game with in the starting position", () => {
  console.log('game: ' + gamePGN)
    const {fens} = createGame(gamePGN)
    const expectedOutput = ["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"]
    expect(fens).toStrictEqual(expectedOutput)
})
