import { IGame } from './game'

export default {
  state: {
    question: null,
    cost: null,
    answers: null,
    id: null,
  },
  reducers: {
    setRound: (state: IGame, payload: IGame): IGame => {
      localStorage.setItem('round', JSON.stringify(payload))
      return payload
    },
    fetchRoundData: (): IGame => {
      let localRound = localStorage.getItem('round')
      if (localRound) {
        localRound = JSON.parse(localRound)
      }
      return (localRound as unknown) as IGame
    },
  },
}
