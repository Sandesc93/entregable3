import React from 'react'
import './Styles/location.css'

const Location = ({location}) => {


  return (
    <article className='location__container'>
        <h2 className='locationName'>{location?.name} </h2>
        <ul
        className='location__list'>
            <li className='location__items'><span className='location__atribute'>Dimension: </span>{location?.dimension}</li>
            <li className='location__items'><span className='location__atribute'>Population: </span>{location?.residents.length}</li>
            <li className='location__items'><span className='location__atribute'>Type: </span>{location?.type}</li>
        </ul>
    </article>


  )
}

export default Location