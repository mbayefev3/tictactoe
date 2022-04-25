import React from 'react'

export default function SearchInput({placehold,titrePost,setTitrePost,ville,setVille}) {




    const handlesumit=(e)=>{

        e.preventDefault()
        console.log(titrePost)
        console.log(ville)

    }
  return (
    <div>

        <div className=''>
        <form  onSubmit={handlesumit} className='input-elem'action="">


        <input placeholder='Titre de poste, mots-clés ou entreprise' value={titrePost} onChange={(e)=>setTitrePost(e.target.value) } className='input-ui' type="text" />

<input  placeholder='ville ou province' value={ville} onChange={(e)=>setVille(e.target.value) } className='input-ui' type="text" />
<button className='search-button' type='submit'>Rechercher</button>
        </form>

        </div>
    </div>
  )
}
