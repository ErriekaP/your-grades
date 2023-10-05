import React from "react";
import SearchBox from "./components/SearchBox";
import Forms from "./components/Forms";
import Table from "./components/Table";
import { useState } from 'react';

function App() {


  const [txtValue, setTxtValue] = useState("");
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    courseNo: "",
    courseName: "",
    courseUnits: 0,
    courseGrade: "",
  });

  

  const handleForm =(e) => setForm({...form, [e.target.id]: e.target.value})

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, {id: data.length + 1, courseNo: form.courseNo, courseName: form.courseName, courseUnits: form.courseUnits, courseGrade: form.courseGrade}])

  };
  return (
  
  <div className="App">
     <nav className='bg-gray-800'>
        <div className='mx-auto'>
            <SearchBox value={txtValue} onChange={(e)=> {setTxtValue(e.target.value)}} ></SearchBox>
         </div>
     </nav>

    <div className="container mx-auto p-[1rem]">
    <div className="grid grid-rows-2 grid-flow-col gap-2">
    <div className="row-span-1 w-full">
      <Forms form={form} onChange={handleForm} handleSubmit={handleSubmit}></Forms>
    </div>
    <div className="row-span-2">
      <table className="w-full border-collapse border-2 border-gray-500">
        <thead>
        <tr className='max-w-full px-4 py-2' >
          <th className='border border-gray-400 px-4 py-2 text-gray-800'>Course No.</th>
          <th className='border border-gray-400 px-4 py-2 text-gray-800'>Course Name</th>
          <th className='border border-gray-400 px-4 py-2 text-gray-800'>Units</th>
          <th className='border border-gray-400 px-4 py-2 text-gray-800'>Grade</th>
        </tr> 
      </thead>
  <tbody>
    <Table items={data} query={txtValue}></Table>
   
  </tbody>
</table>

    </div>
    
    
    </div>

    </div>

    </div>



    
  )

}

export default App