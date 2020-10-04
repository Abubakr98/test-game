import { Game } from '../../models/game'
import { RootState } from '../../store'

export const selectState = (
  state: RootState
): { isShow: boolean; gameData: Game } => ({
  isShow: state.menu,
  gameData: state.game.gameData,
})
