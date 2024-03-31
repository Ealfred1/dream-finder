import { useState, useEffect } from 'react'
import useData from '../hooks/useData'
import 'primeicons/primeicons.css'

const Search = () => {
	const [searchVal, setSearchVal] = useState('')
	const [loader, setLoader] = useState(false)
	const { dreamsData } = useData()
	const [filteredResp, setFilteredResp] = useState({})
	const [error, setError] = useState()


	const performSearch = async () => {
		const searchTerm = searchVal.trim().toLowerCase()
		console.log(searchTerm)

		if (searchTerm.length > 0) {
			const filteredData = dreamsData.filter(dream => {
	    		return dream.dream_name.toLowerCase().includes(searchTerm) || dream.dream_name.toLowerCase().startsWith(searchTerm);
	    	});

		    setFilteredResp(filteredData)
		    console.log(filteredResp)
		    if (filteredData.length === 0) {
				setError('Oops! No Results, Try Something Else')
			} else {
				setError('')
			}
		} else {
			setFilteredResp({})
		}

	}


	useEffect(() => {
		performSearch()
	}, [searchVal])

	const handleSearchChange = (e) =>{
		setSearchVal(e.target.value)
	}

	return (
		<>
			<div className="bg-[rgba(255,255,255,0.3)] w-full max-w-3xl h-14 rounded-3xl flex">
				<input type="text" className="outline-none bg-transparent w-[90%] rounded-3xl px-4 py-2 text-slate-200 placeholder-slate-200 tracking-wide" placeholder="Search for dreams..." onChange={handleSearchChange} />
				<div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] px-2 rounded-full bg-gradient-to-r from-[yellow] to-greener translate-x-1 md:translate-x-6"><span className="w-[2.5rem] h-[2.5rem] rounded-full bg-slate-800 border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white tt lg:scale-[1.4] hover:scale-[1] scale-100"><span className="pi pi-search"></span></span></div>
			</div>
			<div className="max-w-3xl w-full h-auto pb-6">
				{ filteredResp.length > 0 && filteredResp.map((data) => (
				<div className='my-4 bg-[rgba(255,255,255,0.3)] w-full h-28 flex flex-col rounded-3xl relative' key={data.id}>
					<div className="flex items-center justify-center flex-col h-full px-4">
						<h1 className='text-center text-lg sm:text-xl font-semibold text-[yellow]'>{data.dream_name}</h1>
						<p className="text-slate-100 text-[1rem]">{data.meaning}</p>
						<p className="text-gray-300 text-[12px] capitalize">Category: {data.category}</p>
					</div>
					
				</div>
				)) }

				{ error && <div className='my-4 bg-[rgba(255,255,255,0.3)] w-full h-28 flex flex-col rounded-3xl flex items-center justify-center text-red-300 font-bold'>{error}</div> }
			</div>
		</>
	)
}

export default Search