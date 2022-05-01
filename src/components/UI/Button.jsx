import React from 'react'

export default function Button({handleClick,ontoggle,value}) {
  return (
    <div>
        <button onClick={()=>{
            handleClick(value)
        }} className='button-ui'>{value}</button>
    </div>
  )
}
