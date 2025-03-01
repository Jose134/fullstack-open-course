const Search = ({ search, setSearch }) => {
  return (
    <div>
      <span>Find countries</span>
      <input value={search} type="text" onChange={(evt) => setSearch(evt.target.value)} />
    </div>
  );
};

export default Search;