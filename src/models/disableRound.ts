import { createModel } from '@rematch/core'
import { RootModel } from '.'

const disableRound = createModel<RootModel>({
  state: false,
  reducers: {
    setDisable: (state: boolean, payload: boolean) => payload,
  },
})

export default disableRound
