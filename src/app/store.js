import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { rationApi } from '../services/rationApi'

export const store = configureStore({
  reducer: {
    [rationApi.reducerPath]: rationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rationApi.middleware),
})

setupListeners(store.dispatch)