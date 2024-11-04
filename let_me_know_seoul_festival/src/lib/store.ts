import { festivalAPI } from '@/app/api/festival'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import festivals from './festivalSlice'
import reaction from './reactionSlice'


export const makeStore = () => {
  return configureStore({
    reducer: {
      [festivalAPI.reducerPath]: festivalAPI.reducer,
      festivals,
      reaction
    },
      // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(festivalAPI.middleware),
  })
}

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(makeStore)

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']