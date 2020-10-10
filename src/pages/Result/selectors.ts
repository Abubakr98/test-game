import { RootState } from '../../store'

const selectState = (
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
export default selectState
