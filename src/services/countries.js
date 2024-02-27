
export const searchCountries = async ({ search }) => {
    if (search === '') return null

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${search}`)
        const json = await response.json()

        const countries = json

        return countries?.map(country => ({
            id: country.cca2,
            name: country.name.common,
            name_oficial: country.name.official,
            flags: country.flags.png,
            flag: country.flag,
            capital: country.capital,
            language: country.languages.spa,
            continents: country.continents

        }))

    } catch (error) {
        throw new Error('Error searching movies')
    }
}