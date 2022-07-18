import { Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<nav className='flex justify-between items-center gap-x-3'>
			<Link to='/home'>Home</Link>
			<Link to='/favorites'>Favorites</Link>
		</nav>
	)
}

export default NavBar
