import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import models from './models'

export const store = init({
  models,
})

export type Store = typeof models
export type Dispatch = RematchDispatch<typeof models>
export type RootState = RematchRootState<typeof models>
