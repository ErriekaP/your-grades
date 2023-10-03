import React from 'react'
import SearchBox from './SearchBox';

function NavBar(){
    return(
     <nav className='bg-gray-800'>
        <div className='mx-auto'>
            <SearchBox ></SearchBox>
         </div>
     </nav>
       
    )
}

export default NavBar;