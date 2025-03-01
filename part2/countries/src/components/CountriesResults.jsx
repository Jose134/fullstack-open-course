import { useEffect, useState } from "react";
import Country from "./Country";
import CountryList from "./CountryList";

const CountriesResults = ({ countries }) => {
  const TOO_MANY = 10;

  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    setSelectedCountry(null);
  }, [countries]);

  if (!countries) {
    return <p>Loading...</p>;
  }

  if (selectedCountry) {
    return <Country country={selectedCountry} />;
  }

  if (countries.length > TOO_MANY) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countries.length > 1) {
    return (<CountryList countries={countries} setCountry={setSelectedCountry} />);
  } else if (countries.length === 1) {
    return (<Country country={countries[0]} />);
  } else {
    return <p>No matches found</p>;
  }
}

export default CountriesResults;