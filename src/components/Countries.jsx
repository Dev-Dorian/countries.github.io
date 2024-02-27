function ListOfCountries({ countries }) {
    return (
        <ul className="countries">
            {
                countries.map(country => (
                    <li className="country" key={country.id}>
                        <h3>{country.name}</h3>
                        <img src={country.flags} alt={country.flag} />
                        <p>{country.name_oficial}</p>
                        <h4>Capital {country.capital}</h4>
                        <h4>{country.language}</h4>
                        <h4>Continent {country.continents}</h4>
                    </li>
                ))
            }
        </ul>
    )
}

const NoCountriesResults = () => {
    return (
        <p>No results</p>
    )
}

export function Countries({ countries }) {

    const hasCountries = countries?.length > 0

    return (
        hasCountries
            ? (
                <ListOfCountries countries={countries} />
            ) : (
                <NoCountriesResults />
            )
    )
}