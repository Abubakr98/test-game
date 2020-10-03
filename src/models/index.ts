import { Models } from '@rematch/core'

import menu from './menu'
import game from './game'
import disableRound from './disableRound'
import round from './round'

export interface RootModel extends Models {
  menu: typeof menu
  game: typeof game
  disableRound: typeof disableRound
  round: typeof round
}

export const models: RootModel = { menu, game, disableRound, round }
