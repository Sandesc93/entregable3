import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Styles/cardResident.css'


const ResidentInfo = ({url}) => {
  
    const [resident, setResident] = useState()

    useEffect(() => {
        axios.get(url)
        .then(res =>setResident(res.data))
        .catch(err=>console.log(err))

    }, [])
    
        
    
  
    return (
    <div className='resident'>
        <header className='resident__header'>
        <img className='resident__img' src={resident?.image} alt="" />
        <div className='resident__container--status'>
            <div className={`resident__circle  ${resident?.status}`}></div>
            <span className='resident__status'>{resident?.status}</span>
        </div>
        </header>
        <div className='resident__body'>
        <h2 className='resident__name'>{resident?.name}</h2>
        
        <ul className='resident__list'>
            <li className='resident__item'><span className='resident__atribute'>Specie: </span>{resident?.species}</li>
            <li className='resident__item'><span className='resident__atribute'>Origin: </span>{resident?.origin.name}</li>
            <li className='resident__item'><span className='resident__atribute'>Episodes:</span>{resident?.episode.length}</li>
        </ul>
    </div>

    </div>

  )
}

export default ResidentInfo