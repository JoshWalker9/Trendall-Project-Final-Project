import basicSearch from '../../assets/BasicSearch.png';
import BrezlyArchive from '../../assets/AdvancedSearch.png';
import { Link } from 'react-router-dom';
const Search = () => {
    return (
    <div>


     <div className="md:flex items-center justify-center mt-20 gap-10 ">


    <div className=" rounded-md shadow-md bg-white text-gray-800 mb-4">
	<img src={basicSearch} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">Artefact Search</h2>
			<p className="text-gray-800">For searching click bellow.</p>
		</div>
		<Link to="/searchtec/all">
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#E22232] hover:bg-[#f23343] text-gray-50">Artefact Search</button>
		</Link>
	</div>
    </div>
  
	<div className=" rounded-md shadow-md bg-white text-gray-800 mb-4">
        <img src={BrezlyArchive} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">Beazley Archive</h2>
                <p className="text-gray-800">Beazley archive pottery database (BAPD).</p>
            </div>
            <Link to="https://www.carc.ox.ac.uk/carc/pottery" target="_blank">
            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#E22232] hover:bg-[#f23343] text-gray-50">Beazley Archive</button>
            </Link>
        </div>
        </div>
    

    {/* <div className=" rounded-md shadow-md bg-white text-gray-800 mb-4">
	<img src={advancedSearch} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">Advanced Search</h2>
			<p className="text-gray-800">For searching in advanced way click bellow.</p>
		</div>

		<Link to="/advancedsearch">
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#E22232] hover:bg-[#f23343] text-gray-50">Advanced Search</button>
		</Link>
	</div>
    </div> */}
    </div>      

    </div>
    );
};

export default Search;