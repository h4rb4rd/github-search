import { IRepo } from '../models'
import { useActions } from '../hooks/useActions'
import { useAppSelector } from '../hooks/useAppSelector'
import { useState } from 'react'

interface RepoCardProps {
	repo: IRepo
}

const RepoCard = ({ repo }: RepoCardProps) => {
	const { addFavorite, removeFavorite } = useActions()
	const { favoritesList } = useAppSelector(state => state.favorites)
	const [isFavorite, setIsFavorite] = useState(
		favoritesList.includes(repo.html_url)
	)

	const addToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		addFavorite(repo.html_url)
		setIsFavorite(true)
	}

	const removeFromFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		removeFavorite(repo.html_url)
		setIsFavorite(false)
	}

	return (
		<div className='flex items-center border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
			<div className='relative w-full h-full'>
				<h2 className='text-lg font-bold'>{repo.full_name}</h2>
				<p className='text-sm'>
					Forks: <span className='font-bold mr-2'>{repo.forks}</span>
					Watchers: <span className='font-bold'>{repo.watchers}</span>
				</p>
				<p className='text-sm font-thin'>{repo?.description}</p>

				<a
					href={repo.html_url}
					target='_blank'
					rel='noreferrer'
					className='absolute top-0 left-0 right-0 bottom-0 z-30 text-transparent'
				>
					{repo.full_name}
				</a>
			</div>
			{!isFavorite && (
				<button
					className='py-2 px-4 bg-yellow-400 rounded-md hover:shadow-md transition-all'
					onClick={addToFavorite}
				>
					Add
				</button>
			)}
			{isFavorite && (
				<button
					className='py-2 px-4 bg-red-400 rounded-md hover:shadow-md transition-all'
					onClick={removeFromFavorite}
				>
					Remove
				</button>
			)}
		</div>
	)
}

export default RepoCard
