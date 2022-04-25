import React from 'react'

import './style/style.css'
const ListJob = ({ name, email, id, country }) => {

    return (
        <div className='job-list'>
            <ol>
                <li>{name}</li>
                <li>
                    <img src={`https://robohash.org/${id}`} />
                </li>
                <li>{email}</li>
                <li>{country}</li>
            </ol>
        </div>
    )
}

export default ListJob