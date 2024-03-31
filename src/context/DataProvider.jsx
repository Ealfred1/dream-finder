import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
	const [dreamsData, setDreamsData] = useState({})
	const [loading, setLoading]= useState(true)

	const getDreams = async () => {

		try {
			const response = await axios.get('https://dream-dict.onrender.com/api/')
			setDreamsData(response.data)
		} catch (error) {
			console.log('error', error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getDreams()
		console.log('running')
	}, [])

	return (
		<DataContext.Provider value={{ dreamsData }}>
			{ children }
		</DataContext.Provider>
	)

}
 
export default DataContext