import React from 'react'

function SearchBox({value, onChange}){
    return(
        <div className='flex flex-col mb-10 mx-auto'>
            <div className="flex justify-center items-center">
              <input className="placeholder:italic placeholder:text-slate-400 block bg-white my-7 p-2 border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-1/4"
              placeholder="Search by..." 
              type="text" 
              name="search"
              value={value} 
              onChange={onChange} 
              />

            </div>
        </div>
    )
}

export default SearchBox;