import SearchBar from '../components/SearchBar'

const Home = () => {
	const showRepos = (username: string) => {
		console.log(username)
	}

	return (
		<>
			{/* search */}
			<SearchBar showRepos={showRepos} />
			{/* repos */}
		</>
	)
}

export default Home
