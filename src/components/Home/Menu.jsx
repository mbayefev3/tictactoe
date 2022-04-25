import React from 'react'
import logo from '../../images/indeed.png'
function Menu() {
  return (
    <div>


        <div>
              
            <nav className='menu-home'>
            <img src={logo} alt=""  />
               <div className='fist-menu'>
               <ul className='menu-child'>
                    <li>Rechercher</li>
                    <li>Avis sur les entreprises</li>
                    <li>Consulter des salaires</li>
                </ul>
               </div>
               <div className='second-menu'>
               <ul className='menu-child'>
                    <li>Téléchargez votre CV</li>
                    <li className='link-color'> Connexion</li>
                    <li className='link-color'>En </li>
                    <li>FR </li>
                    <li>Entreprises / Publier une offre d'emploi</li>
                </ul>
               </div>
            </nav>
        </div>
    </div>
  )
}

export default Menu