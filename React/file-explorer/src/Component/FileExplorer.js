import React, { useState } from 'react'

const FileExplorer = ({folderData}) => {
    const[showChildren, setShowChildren] = useState(false)
    // console.log(folderData);
 const    handleClick =()=>{
   setShowChildren((prevValue)=>{return !prevValue})
    }
  return (
    <div className='container'>
        <h5 >{folderData.type === 'folder'? (showChildren?'📂':'📁'):'📄' }
            <span onClick={handleClick}>{folderData.name}</span>
        </h5>
        {
         showChildren &&   folderData?.children?.map((childData,index)=>{
                return <FileExplorer key={index} folderData={childData}></FileExplorer>
            })
        }
    </div>
  )
}

export default FileExplorer