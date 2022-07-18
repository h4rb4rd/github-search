import { IRepo } from '../models'

interface RepoCardProps {
	repo: IRepo
}

const RepoCard = ({ repo }: RepoCardProps) => {
	return (
		<div className='relative border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
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
	)
}

export default RepoCard
