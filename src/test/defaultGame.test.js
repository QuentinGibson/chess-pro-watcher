
import {defaultGame} from 'utils'

it("creates a game with in the starting position", () => {
    const {fens} = defaultGame
    const expectedOutput = ["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"]
    expect(fens).toStrictEqual(expectedOutput)
})
