import { Game } from '../../models/game'
import { RootState } from '../../store'

const selectState = (
  state: RootState
): { isShow: boolean; gameData: Game } => ({
  isShow: state.menu,
  gameData: state.game.gameData,
})
export default selectState
