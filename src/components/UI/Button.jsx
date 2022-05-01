import React from 'react'

export default function Button({myindex,handleClick,ontoggle,value}) {
  return (
    <div>
        <button onClick={()=>{
            handleClick(value,myindex)
        }} className='button-ui'>{value}</button>
    </div>
  )
}
