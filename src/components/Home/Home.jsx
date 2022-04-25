import React from 'react'

import Menu from './Menu'
import HomeForm from './HomeForm'
import Card from './UI/Card'

function Home({ titrePost, setTitrePost, ville, setVille, jobData }) {
  return (
    <div>

      <Menu />
      <HomeForm ville={ville} setVille={setVille} setTitrePost={setTitrePost} titrePost={titrePost} FilteredFunc={props.FilteredFunc} />
      {jobData.map((jobData) => {
        return (
          <div>
            <Card title={jobData.title} entreprise={jobData.entreprise} salaire={jobData.salaire} ville={jobData.ville} description={jobData.description} />
          </div>

        )
      })}
    </div>
  )
}

export default Home