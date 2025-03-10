import React, { useState } from 'react'

const Tabs = ({tabsData}) => {
    const [content,setContent] = useState(tabsData[0].content)
    const [active, setActive] = useState(0)
   const handleTabClick = (label, index)=>{
    setActive(index)
    tabsData.forEach((tab)=>{
        if (label===tab.label) setContent(tab.content)
    })

   }
  return (
    <div className='tabs'>
        <div className='tabs__container'>
            {tabsData.map((item, index)=>{
               return <button className={index===active?`active`:''} key={index} onClick={()=> handleTabClick(item.label, index)}>{item.label}</button>
            })}
        </div>
        <div className='tabs__content'>{content}</div>
    </div>
  )
}

export default Tabs