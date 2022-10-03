import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorScreen from './components/ErrorScreen'
import FilterList from './components/FilterList'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'
import getRandomNumber from './utils/getRandomNumber'

function App() {

  //guardar location
  const [location, setlocation] = useState()
  //para información del input
  const [search, setsearch] = useState()
  //para sugerencias en search
  const [dataList, setDataList] = useState()
  //para ver si hay error en search
  const [hasError, sethasError] = useState(false)

  useEffect(() => {
    let id = getRandomNumber()
    if (search) {
      id = search
    }

    const url = `https://rickandmortyapi.com/api/location/${id}`

    axios.get(url)
      .then(res =>{ 

      sethasError(false)
         setlocation(res.data)
      })
      .catch(err => sethasError(true))

  }, [search])

  const handleSubmit = event => {
    event.preventDefault()
    setsearch(event.target.idLocation.value)
  }

  const handleChange = event => {

    if (event.target.value === '') {
      setDataList()
    } else {
      const url = `https://rickandmortyapi.com/api/location?name=${event.target.value}`

      axios.get(url)
        .then(res => setDataList(res.data.results))
        .catch(err => console.log(err))
    }

  }




  return (
    <div className="App">
      <header className='header'>
        <h1 className='pageName'></h1>
        <form className='form' onSubmit={handleSubmit}>
          <input id='idLocation' className='input'
            placeholder='entry name or number from 1-126'
            type="text"
            onChange={handleChange} />
          <button className='button'>search</button>
          <FilterList
            dataList={dataList}
            setsearch={setsearch}
          />
        </form>

      </header>
    <div className='principal__container'>
        {
          hasError ?
            <ErrorScreen />

            :

            <>
              <Location location={location} />
              
              <div className='card__container-residents'>
                {
                  location?.residents.map(url => (
                    <ResidentInfo
                      key={url}
                      url={url} />
                  ))
                }
              </div>
              </>
             
      }

       
    </div>
    </div>
  )
}

export default App
