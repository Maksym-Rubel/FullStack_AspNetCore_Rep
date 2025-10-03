import React from 'react'
import "./ItemsSelectView.css"
export default function ItemsSelectView({index,id, name }) {
    function FirstLetter(Title) {
        return String(Title).slice(0, 1);
    }
    function ReturnTime(index)
    {
        if(index == 1)
        {
            return "8:30-9:50"
        }
        else if(index == 2)
        {
            return "10:00-11:20"
        }
         else if(index == 3)
        {
            return "11:50-13:10"
        }
         else if(index == 4)
        {
            return "13:20-14:40"
        }
    }
    return (
        <div className='BackGroundItem-class'>
          
                <div className='CircleNameMini-classMini'>
                    <p>{++index}</p>
                </div>
           
            <div className='Subject-classMini'>
                <div className='CircleName-classMini'>
                    <p>{FirstLetter(name)}</p>
                </div>
            </div>
            <div className='SubjectText-classMini'>
                <h3>{name}</h3>
                <p>{ReturnTime(index)}</p>

            </div>
        </div>
    )
}
