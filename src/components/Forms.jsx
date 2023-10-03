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
            //value={form.courseNo} 
            //onChange={onChange} 
            //required
            />

            <div className='text-sm font-medium text-slate-700 '>Course Name</div>
            <input className="placeholder:text-slate-400 block bg-white mb-5 p-2 border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
            placeholder="BS Computer Science" 
            type="text" 
            name="courseName" 
            id='courseName' 
            //value={form.courseName} 
            //onChange={onChange} 
            //required
            />

            <div className='text-sm font-medium text-slate-700'>Units</div>
            <input className="placeholder:text-slate-400 block bg-white mb-5 p-2 border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="3" 
            type="text" 
            name="courseUnits" 
            id='courseUnits' 
            //value={form.courseUnits} 
            //onChange={onChange} required
            />

            <div className='text-sm font-medium text-slate-700'>Grade</div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800'/>
            <label>A</label>
            </div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800'/>
            <label>B+</label>
            </div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800'/>
            <label>B</label>
            </div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800'/>
            <label>C+</label>
            </div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800'/>
            <label>C</label>
            </div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800'/>
            <label>D</label>
            </div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800'/>
            <label>F</label>
            </div>

            <button className='bg-gray-800 hover:bg-[#f1af61] rounded-none hover:opacity-80 text-white font-bold p-2 mt-3 self-end ' type="submit">Submit</button>
            </form>
            
    </div>
    
       
    )
}

export default Forms;