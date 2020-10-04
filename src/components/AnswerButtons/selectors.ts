import { Game } from '../../models/game'
import { RootState } from '../../store'

const selectState = (
  state: RootState
): { gameData: Game; disable: boolean } => ({
  gameData: state.game.gameData,
  disable: state.disableRound,
})

export default selectState
