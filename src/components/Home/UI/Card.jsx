import React from 'react'

export default function ({title,entreprise,salaire,ville,description}) {
  return (
    <div className='card-home'>

        <div className='Card '>

            <p className='card-title'>{title}</p>
            <p className='entreprise'>{entreprise}</p>
             <p className='entreprise'>Télétravail temporaire in Ville de Québec, QC</p>
             <p className='entreprise'>{ville}</p>
             <p className='salary'>{salaire}</p>
             <ul className='description'>
                 <li>Horaires flexibles et congés adaptés pour la conciliation travail / vie personnelle.</li>
                 <li>Régime de retraite avantageux, programme d’aide aux employés (PAE) et plus.</li>
                 <li>Possibilités de carrière en étant appuyé par une équipe de gestion compétente.</li>
             </ul>
            
        </div>
    </div>
  )
}
