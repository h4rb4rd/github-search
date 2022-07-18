import { Outlet } from 'react-router-dom'

import Header from './Header'

const MainLayout = () => {
	return (
		<>
			<Header />
			<main className='flex flex-col justify-center items-center pt-10 mx-auto h-full w-full'>
				<Outlet />
			</main>
		</>
	)
}

export default MainLayout
