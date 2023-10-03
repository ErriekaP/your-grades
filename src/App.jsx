import React from "react";
import SearchBox from "./components/SearchBox";
import NavBar from "./components/navbar";
import Forms from "./components/Forms";
import Table from "./components/Table";
import TableHeader from "./components/TableHeader";
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
    <NavBar></NavBar>
    <div className="container mx-auto p-[1rem]">
    <div className="grid grid-rows-2 grid-flow-col gap-4">
    <div className="row-span-1">
      <Forms orm={form} onChange={handleForm} handleSubmit={handleSubmit}></Forms>
    </div>
    <div class="row-span-2">
      <table class="table-auto">
        <thead>
          <TableHeader></TableHeader> 
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