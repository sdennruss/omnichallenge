import React from "react";

const Search = ({ countries, setSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const filter = e.target.value;

    const newCountries = [...countries];
    const filterCountries = newCountries.filter((country) => {
      return (
        country.fields.Name.toLowerCase().includes(filter.toLowerCase()) ||
        country.fields.Capital.toLowerCase().includes(filter.toLowerCase()) ||
        country.fields.Сurrency.toLowerCase().includes(filter.toLowerCase()) ||
        country.fields.Language.toLowerCase().includes(filter.toLowerCase()) ||
        country.fields.Region.toLowerCase().includes(filter.toLowerCase())
      );
    });
    setSearch(filterCountries);
    console.log(filter);
  };
  return (
    <div className="input-container">
      <i className="fa fa-search"></i>
      <input
        text="type"
        placeholder="Search location"
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};

export default Search;
