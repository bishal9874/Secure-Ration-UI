import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { rationApi } from '../services/rationApi'
import authReducer from '../features/authSlice'



export const store = configureStore({
  reducer: {
    [rationApi.reducerPath]: rationApi.reducer,
    auth:authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rationApi.middleware),
  // enhancers: [storeEnhancers]
})

setupListeners(store.dispatch)
