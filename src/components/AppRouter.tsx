import { Navigate, Route, Routes } from 'react-router-dom'

import Favorites from '../pages/Favorites'
import Home from '../pages/Home'
import MainLayout from './MainLayout'
import NotFound from '../pages/NotFound'
import { RouteNames } from '../types'

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<Navigate to={RouteNames.HOME} />} />
				<Route path={RouteNames.HOME} element={<Home />} />
				<Route path={RouteNames.FAVORITES} element={<Favorites />} />
			</Route>
			<Route path={RouteNames.NOT_FOUND} element={<NotFound />} />
		</Routes>
	)
}

export default AppRouter
