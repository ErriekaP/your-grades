import React from 'react'

const Table = (props) => {

    let totalQPI;
  
    const gradeEquivalent = {
      'A': 4,
      'B+': 3.5,
      'B': 3, 
      'C+':2.5,
      'C': 2,
      'D': 1,
      'F': 0
    }
  
    const totalGradePoints =  props.items.reduce((total, data) => {
      return total + (data.courseUnits * gradeEquivalent[data.courseGrade])
    } , 0)
  
    const totalUnits =  props.items.reduce((total, data) => {
      return total + Number(data.courseUnits)
    }, 0)
  
    totalQPI = (totalGradePoints / totalUnits).toFixed(2);
  
    if (isNaN(totalQPI)) {
      totalQPI = 0; 
    } 
  
    
    
     
    return (
      <>
          {props.items
                .filter((item) => (
                  props.query.toLowerCase() === '' ||
                  item.courseNo.toLowerCase().includes(props.query.toLowerCase()) || 
                  item.courseName.toLowerCase().includes(props.query.toLowerCase()) ||
                  item.courseGrade.toLowerCase().includes(props.query.toLowerCase()) ||
                  item.courseUnits.includes(props.query) 
                  ))
                .map((item, index) => (
                      <tr key={item.id}>
                          {/* <th scope='row'>{index+1}</th> */}
                          <td className='border border-gray-400 px-4 py-2 text-gray-800' >{item.courseNo}</td>
                          <td className='border border-gray-400 px-4 py-2 text-gray-800'>{item.courseName}</td>
                          <td className='border border-gray-400 px-4 py-2 text-gray-800'>{item.courseUnits}</td>
                          <td className='border border-gray-400 px-4 py-2 text-gray-800'>{item.courseGrade}</td>
                      </tr>
                    
                      
                ))}
            <tr>
              <td></td>
              <td></td>
              <td className='border border-gray-400 px-4 py-2 text-gray-800'>Total QPI</td>
              <td className='border border-gray-400 px-4 py-2 text-gray-800'>{totalQPI}</td>
           </tr>
  
      </>
    )
  }
export default Table;