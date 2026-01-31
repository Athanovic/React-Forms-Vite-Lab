function SearchBar({ search, onSearchChange }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;