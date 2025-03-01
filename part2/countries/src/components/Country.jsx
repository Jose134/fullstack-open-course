const Country = ({ country }) => {
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p><strong>Capital:</strong> {country.capital[0]}</p>
        <p><strong>Area:</strong> {country.area}</p>
        <h2>Languages</h2>
        <ul>
          {
            Object.values(country.languages).map(l => <li key={l}>{l}</li>)
          }
        </ul>
        <img src={country.flags.png} alt={country.name.common} width="100" />
      </div>
    );
  }
  
  export default Country;