
const SearchBar = ({search, setSearch}) => {

  return (
    <form className="flex justify-center py-4"> 
      <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search Products..' className="w-full max-w-xl px-3 py-2 rounded-md shadow bg-pink-100 outline-none"/>
    </form>
  )
}

export default SearchBar
