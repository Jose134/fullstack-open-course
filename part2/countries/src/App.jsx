import { useEffect, useState } from 'react';
import Search from './components/Search';
import CountriesResults from './components/CountriesResults';
import getAllCountries from './services/countriesService';

const App = () => {

  const [countries, setCountries] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getAllCountries.then(data => setCountries(data));
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
