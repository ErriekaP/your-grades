import React from 'react'

const TableHeader = () => {
  return (
    <>
       <tr className='max-w-full bg-[#f1af61] text-white' >
          <th className='border-2	border-solid border-white border-spacing-1 p-2 w-20'>Course No.</th>
          <th className='border-2	border-solid border-white border-spacing-1 p-2 w-20'>Course Name</th>
          <th className='border-2	border-solid border-white border-spacing-1 p-2 w-20'>Units</th>
          <th className='border-2	border-solid border-white border-spacing-1 p-2 w-20'>Grade</th>
        </tr>
    </>
   
  )
}

export default TableHeader