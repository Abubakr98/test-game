import { createModel } from '@rematch/core'

import { RootModel } from '.'
import { IGame } from './game'

let localRound = localStorage.getItem('round')
if (localRound) {
  localRound = JSON.parse(localRound)
}

const round = createModel<RootModel>({
  state: localRound,
  reducers: {
    setRound: (state: IGame, payload: IGame) => payload,
  },
})

export default round
