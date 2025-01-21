import React from 'react'

const Signal = ({light,isActive}) => {
    
  return (
    <div className="signal" style={{backgroundColor: isActive ? light:'grey'}}></div>
  )
}

export default Signal