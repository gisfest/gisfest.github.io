import React from 'react'
import './Deadline.css';

const Deadline = ({day, month, year, btnText, color, link}) => {
  return (
    <div className='column'>
        <div className='poster-deadline' style={{borderColor:color}}>
              <h1>Deadline</h1>
              <h3 style={{color:color}}>{day}</h3>
              <h3 style={{color:color}}>{month},</h3>
              <h3 style={{color:color}}>{year}</h3>
              <button type="submit"><a href={link}target={'blank_'}>{btnText} ➚</a></button>
           </div>
           
    </div>
  )
}

export default Deadline
