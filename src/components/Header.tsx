import Logo from './Logo'
import NavBar from './NavBar'

const Header = () => {
	return (
		<header className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white'>
			<Logo />
			<NavBar />
		</header>
	)
}

export default Header
