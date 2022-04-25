import React from 'react'

import Menu from './Menu'
import HomeForm from './HomeForm'

function Home({titrePost,setTitrePost,ville,setVille}) {
  return (
    <div>

        <Menu/>
        <HomeForm ville={ville} setVille={setVille} setTitrePost={setTitrePost} titrePost={titrePost} />
    </div>
  )
}

export default Home