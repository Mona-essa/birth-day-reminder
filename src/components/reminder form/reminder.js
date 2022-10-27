import React from 'react'
import './reminder.css'

const Reminder = ({people}) =>{
      return (
    <div className='person'>
        {people.map(person => {
            const {id,name,age,image} = person;
            return(
                <div className='bdItem' key={id}>
                  <img src={image}/>
                  <h4>{name}</h4>
                    <p>{age} years</p>
                    
                    </div>
                    
            )
        })}
       
    </div>
)}

export default Reminder;