import { RootState } from '../../store'

export const selectState = (
  state: RootState
): {
  round: {
    question: null
    cost: null
    answers: null
    id: null
  }
} => ({
  round: state.round,
})
