import { useState } from 'react'
import './App.css'
import { Countries } from './components/Countries'
import { useContries } from './hooks/useCountries'
import { useEffect } from 'react'
import { useRef } from 'react'

function useSearch() {

  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {

    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('You can not search for an empty country')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('Can not search for a country with a number')
      return
    }

    if (search.length < 3) {
      setError('The search must have at least 3 characteristics')
      return
    }
    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() {
  const { search, updateSearch, error } = useSearch()
  const { countries, getCountries } = useContries({ search })


  const handleSubmit = (event) => {
    event.preventDefault()
    /*const { query } = Object.fromEntries(
      new window.FormData(event.target)
    )*/
    //console.log({ search })
    getCountries()
  }

  const handleChange = (event) => {
    //setQuery(event.target.value)
    //const newQuery = event.target.value
    //if (newQuery.startsWith(' ')) return
    updateSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Countries Search</h1>
        <form className='form' onSubmit={handleSubmit} action="">
          <input style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent', width: '300px' }} onChange={handleChange} value={search} name='query' placeholder='Countries Common Or Official Value' />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }} className='error'>{error}</p>}
      </header>
      <main>
        <Countries countries={countries} />
      </main>
    </div>
  )
}

export default App
