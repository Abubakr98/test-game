export interface IGame {
  question: string
  cost: string
  answers: {
    text: string
    isRight: boolean
    id: number
  }[]
  id: number
}

export type Game = Array<IGame>
export type StateGame = { gameData: Game }
export default {
  state: {
    gameData: [
      {
        question: '',
        cost: '',
        answers: [
          {
            text: '',
            isRight: false,
            id: 1,
          },
        ],
        id: 1,
      },
    ],
  },
  reducers: {
    levelPassed: (state: StateGame): { gameData: Game } => {
      const data = state.gameData.slice(1)
      localStorage.setItem('game', JSON.stringify(data))
      return {
        ...state,
        gameData: data,
      }
    },
    setGameData: (state: StateGame, payload: Game): StateGame => {
      return { ...state, gameData: payload }
    },
    fetchGameData: (state: StateGame): StateGame => {
      let localGame = localStorage.getItem('game')
      if (localGame) {
        localGame = JSON.parse(localGame)
      }
      return { ...state, gameData: (localGame as unknown) as Game }
    },
  },
}
