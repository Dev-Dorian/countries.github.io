

import { useState } from 'react'
import withResults from '../json/with-results.json'
import withoutResults from '../json/no-results.json'
import { searchCountries } from '../services/countries'

export function useContries({ search }) {
    const [responseCountries, setResponseCountries] = useState([])
    const countries = responseCountries
    const [error, setError] = useState(null)


    const getCountries = async () => {
        try {
            const newCountries = await searchCountries({ search })
            setResponseCountries(newCountries)
        } catch (error) {
            setError(error.message)
        } finally {

        }
    }

    return { countries, getCountries }

}
