import React from 'react'

export default function SearchInput({placehold}) {
  return (
    <div>

        <input placeholder={placehold} className='input-ui' type="text" />
    </div>
  )
}
