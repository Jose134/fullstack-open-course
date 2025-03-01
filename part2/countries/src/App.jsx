import { useEffect, useState } from 'react';
import Search from './components/Search';
import CountriesResults from './components/CountriesResults';

const App = () => {

  const [countries, setCountries] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
      });
  }, []);

  const filteredCountries = countries?.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <CountriesResults countries={filteredCountries} />
    </>
  )
};

export default App;
