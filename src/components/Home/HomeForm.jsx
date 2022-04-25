import React from 'react'
import Buttons from './UI/Buttons'
import SearchInput from './UI/SearchInput'
function HomeForm({titrePost,setTitrePost,ville,setVille}) {
  return (
    <div className='home-form'>
        <div className='home-input'>

          <SearchInput ville={ville} setVille={setVille}   titrePost ={titrePost} setTitrePost={setTitrePost} placehold='Titre de poste, mots-clés ou entreprise' />
          
  

        </div>
    </div>
  )
}

export default HomeForm

//Test commit 