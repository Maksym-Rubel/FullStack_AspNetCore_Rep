import React from 'react'
import "./OneSubject.css"

function FirstLetter(Title)
{
    return String(Title).slice(0,1);
}


export default function OneSubject({Id,Title,Description}) {
  return (
    <div className='SubjectBack-class'>
        <div className='Subject-class'>
            <div className='CircleName-class'>
                <p>{FirstLetter(Title)}</p> 
                {/* Hear paste first letter of subject */}
            </div>
        </div>
        <div className='SubjectText-class'>
            <h3>{Title}</h3>
            <p>{Description}</p>
        </div>
    </div>
  )
}
