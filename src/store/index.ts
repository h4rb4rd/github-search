import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { favoritesReducer } from './slices/favorites'
import { githubApi } from '../services/githubService'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

const rootReducer = combineReducers({
	[githubApi.reducerPath]: githubApi.reducer,
	favorites: favoritesReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(githubApi.middleware),
	})
}

export const store = setupStore()

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
