import { createModel } from '@rematch/core'
import { RootModel } from '.'

let localGame = localStorage.getItem('game')
if (localGame) {
  localGame = JSON.parse(localGame)
}
export interface IGame {
  question: string
  cost: string
  answers: {
    text: string
    isRight: boolean
  }
  id: number
}
export type Game = Array<IGame>

const game = createModel<RootModel>({
  state: localGame,
  reducers: {
    levelPassed: (state: Game) => state.slice(1),
    setGameData: (state: Game, payload: Game): Game => payload,
  },
})

export default game
