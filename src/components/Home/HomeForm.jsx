import React from 'react'
import Buttons from './UI/Buttons'
import SearchInput from './UI/SearchInput'
function HomeForm() {
  return (
    <div className='home-form'>
        <div className='home-input'>

          <SearchInput placehold='Titre de poste, mots-clés ou entreprise' />
          <SearchInput  placehold='ville ou province' />
          <Buttons />

        </div>
    </div>
  )
}

export default HomeForm