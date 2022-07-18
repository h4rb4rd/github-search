import { useEffect, useMemo, useRef, useState } from 'react'

import Error from './Error'
import { useDebounce } from '../hooks/useDebounce'
import { useSearchUsersQuery } from '../services/githubService'
import { useClickOutside } from '../hooks/useClickOutside'

interface SearchBarProps {
	showRepos: (username: string) => void
}

const SearchBar = ({ showRepos }: SearchBarProps) => {
	const [searchValue, setSearchValue] = useState('')
	const [isDropDown, setIsDropDown] = useState(false)
	const debouncedSearchValue = useDebounce(searchValue)
	const searchBarRef = useRef(null)
	const { isLoading, isError, data } = useSearchUsersQuery(
		debouncedSearchValue,
		{
			skip: debouncedSearchValue.length < 3,
			refetchOnFocus: true,
		}
	)

	const memoUsers = useMemo(() => {
		return data?.map(user => (
			<li
				key={user.id}
				className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
				onClick={() => {
					showRepos(user.login)
					setIsDropDown(false)
				}}
			>
				{user.login}
			</li>
		))
	}, [data])

	useEffect(() => {
		setIsDropDown(debouncedSearchValue.length > 3 && data?.length! > 0)
	}, [debouncedSearchValue, data])

	useClickOutside(searchBarRef, () => setIsDropDown(false))

	return (
		<>
			{isError && <Error />}
			<div ref={searchBarRef} className='relative max-w-xl w-full z-50'>
				<input
					className='border py-2 px-4 w-full h-[42px] mb-2'
					type='text'
					placeholder='Search for Github username...'
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
				/>
				<ul className='absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white'>
					{isLoading && <li>Loading...</li>}
					{isDropDown && memoUsers}
				</ul>
			</div>
		</>
	)
}

export default SearchBar
