const CountryList = ({ countries, setCountry }) => {
  const getHandleShow = (country) => {
    return () => setCountry(country);
  }

  return (
    <div>
      {
        countries.map(c => <div key={c.name.common}>{c.name.common}<button onClick={getHandleShow(c)}>Show</button></div>)
      }
    </div>
  );
}

export default CountryList;