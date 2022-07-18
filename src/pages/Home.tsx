import { useCallback, useMemo } from 'react'
import Error from '../components/Error'
import RepoCard from '../components/RepoCard'
import SearchBar from '../components/SearchBar'
import { useLazyGetUserReposQuery } from '../services/githubService'

const Home = () => {
	const [fetchRepos, { data, isError, isLoading }] = useLazyGetUserReposQuery()

	const showRepos = useCallback((username: string) => {
		fetchRepos(username)
	}, [])

	const memoRepos = useMemo(() => {
		return data?.map(repo => (
			<li key={repo.id}>
				<RepoCard repo={repo} />
			</li>
		))
	}, [data])

	return (
		<>
			<SearchBar showRepos={showRepos} />
			{isError && <Error />}
			<ul className='container justify-center items-center max-w-xl'>
				{isLoading && <li className='text-center'>Loading...</li>}
				{data?.length && memoRepos}
			</ul>
		</>
	)
}

export default Home
