import React from 'react'

const DayTimeSlots = () => {
    const slots = Array.from({length:24}, (_,index)=>index)
  return (
    <div>
        {slots.map((slot)=>{
            return <div key={slot} className='slot'>{slot}: 00</div>
        })}
    </div>
  )
}

export default DayTimeSlots