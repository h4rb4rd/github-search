import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '../store'
import { actions } from '../store/actions'

export const useActions = () => {
	const dispatch = useDispatch<AppDispatch>()
	return bindActionCreators(actions, dispatch)
}
