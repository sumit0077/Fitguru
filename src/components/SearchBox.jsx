

// Define the React component
const SearchBox = ({ onchange, onsearch,setSearchInput }) => {
  

  return (
    // <input style={{boxShadow: "inset 2px 5px 10px rgba(0,0,0,0.3)",width:"500px"}} type="text" autoComplete="off" name="text" className="input outline-none rounded-lg px-6 py-3 shadow-inner bg-[#ccc] transition ease-in-out duration-300 focus:bg-white focus:scale-105 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2" placeholder="Search Box"></input>
    <div className="flex items-center justify-center p-2">
  <div className="rounded-l w-[500px] p-2">
    <div className="flex">
      <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
        <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
        </svg>
      </div>
      <input onChange={onchange} type="text" className="w-full max-w-[400px] bg-white pl-2 text-base font-semibold outline-0" placeholder="Search Box" id="" />
      <input onClick={()=>{
        onsearch();
        setSearchInput("");
      }} type="button" value="Search" className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors" />
    </div>
  </div>
</div>

);
};

// Export the component
export default SearchBox;
