import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LS_FAVORITE_KEY } from '../../constants'

interface FavoritesState {
	favoritesList: string[]
}

const initialState: FavoritesState = {
	favoritesList: JSON.parse(localStorage.getItem(LS_FAVORITE_KEY) ?? '[]'),
}

export const favoritesSlice = createSlice({
	name: 'favoritesSlice',
	initialState,
	reducers: {
		addFavorite(state, action: PayloadAction<string>) {
			state.favoritesList.push(action.payload)
			localStorage.setItem(LS_FAVORITE_KEY, JSON.stringify(state.favoritesList))
		},
		removeFavorite(state, action: PayloadAction<string>) {
			state.favoritesList = state.favoritesList.filter(
				f => f !== action.payload
			)
			localStorage.setItem(LS_FAVORITE_KEY, JSON.stringify(state.favoritesList))
		},
	},
})

export const favoritesActions = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer
