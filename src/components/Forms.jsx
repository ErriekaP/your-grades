import React from 'react'


function Forms({form, onChange, handleSubmit}){
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <div className='text-sm font-medium text-slate-700'>Course No.</div>
            <input className="placeholder:text-slate-400 block bg-white mb-5 p-2 border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="000-000" 
            type="text" 
            name="courseNo" 
            id="courseNo" 
            value={form.courseNo} 
            onChange={onChange} 
            required
            />

            <div className='text-sm font-medium text-slate-700 '>Course Name</div>
            <input className="placeholder:text-slate-400 block bg-white mb-5 p-2 border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
            placeholder="Calculus" 
            type="text" 
            name="courseName" 
            id='courseName' 
            value={form.courseName} 
            onChange={onChange} 
            required
            />

            <div className='text-sm font-medium text-slate-700'>Units</div>
            <input className="placeholder:text-slate-400 block bg-white mb-5 p-2 border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="" 
            type="text" 
            name="courseUnits" 
            id='courseUnits' 
            value={form.courseUnits} 
            onChange={onChange} 
            required
            />

            <div className='text-sm font-medium text-slate-700'>Grade</div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800' name="courseGrade" id='courseGrade' value="A" onChange={onChange}/>
            <label>A</label>
            </div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800' name="courseGrade" id='courseGrade' value="B+" onChange={onChange}/>
            <label>B+</label>
            </div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800' name="courseGrade" id='courseGrade' value="B" onChange={onChange}/>
            <label>B</label>
            </div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800' name="courseGrade" id='courseGrade' value="C+" onChange={onChange}/>
            <label>C+</label>
            </div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800' name="courseGrade" id='courseGrade' value="C" onChange={onChange}/>
            <label>C</label>
            </div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800' name="courseGrade" id='courseGrade' value="D" onChange={onChange}/>
            <label>D</label>
            </div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800' name="courseGrade" id='courseGrade' value="F" onChange={onChange}/>
            <label>F</label>
            </div>

            <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mt-5 border border-gray-400 rounded shadow' type="submit">Submit</button>
            </form>
            
    </div>
    
       
    )
}

export default Forms;