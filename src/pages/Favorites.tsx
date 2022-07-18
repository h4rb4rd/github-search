import { useActions } from '../hooks/useActions'
import { useAppSelector } from '../hooks/useAppSelector'

const Favorites = () => {
	const { favoritesList } = useAppSelector(state => state.favorites)
	const { removeFavorite } = useActions()

	if (!favoritesList.length) return <p className='text-center'>No Items.</p>

	return (
		<ul className='list-none'>
			{favoritesList.map(f => (
				<li className='mb-2'>
					<a href={f} target='_blank' rel='noreferrer' className='mr-8'>
						{f}
					</a>
					<button onClick={() => removeFavorite(f)}>x</button>
				</li>
			))}
		</ul>
	)
}

export default Favorites
