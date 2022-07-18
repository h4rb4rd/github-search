import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className='flex flex-col justify-center items-center h-screen '>
			<h3 className='font-bold text-3xl mb-5'>Page Not Found 404</h3>
			<Link to='/' className='bg-gray-500 text-white px-3 py-1 rounded-md'>
				Go Home
			</Link>
		</div>
	)
}

export default NotFound
