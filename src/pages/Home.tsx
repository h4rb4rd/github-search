import { useSearchUsersQuery } from '../services/githubService'

const Home = () => {
	const { isLoading, isError, data } = useSearchUsersQuery('h4rb4rd')

	console.log(data)

	return <div>Home</div>
}

export default Home
