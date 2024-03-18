import 'primeicons/primeicons.css'

const NavBar = () => {
	return (
		<div className='max-w-5xl mx-auto h-16 relative top-0 mb-16 flex items-center justify-between px-4 py-2 md:py-6 navbar relative'>
			<div className="logo">
				<h1 className="">Dream Dictionary</h1>
			</div>

			<div className="search-bar-icon">
				{/* A primereact icon goes here or a box-icon but styled */}
				<span className="text-2xl text-white"><span className="pi pi-spin pi-cog"></span></span>
			</div>
		</div>
	)
}

export default NavBar