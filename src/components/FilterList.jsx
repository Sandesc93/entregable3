import React from 'react'
import './Styles/suggested.css'

const FilterList = ({dataList, setsearch}) => {

  
    console.log(dataList)

    const select = id => setsearch(id)

  return (
    <ul className='dataList'>
        {
        dataList?.map(location => (
            <li className='dataList__list' onClick={() => select(location.id)} 
            key={location.id}>{location.name}</li>
        ))
        }

    </ul>
  )
}

export default FilterList