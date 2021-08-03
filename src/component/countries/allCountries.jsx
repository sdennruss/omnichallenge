import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "../search/search";
import MobileAllCountries from "./mobileAllCountries";
import { CountryContext } from "../context/countryContext";

const AllCountries = () => {
  const { countries, setSearch } = useContext(CountryContext);
  return (
    <React.Fragment>
      <div className="all-countries-container">
        <Link className="nav-items" to={`/global-employement-solutions`}>
          All
        </Link>
        <Link
          className="nav-items region"
          to={`/global-employement-solutions/americas`}
        >
          Americas
        </Link>
        <Link
          className="nav-items region"
          to={`/global-employement-solutions/europe`}
        >
          Europe
        </Link>
        <Link
          className="nav-items region"
          to={`/global-employement-solutions/asia pacific`}
        >
          Asia Pacific
        </Link>
        <Link
          className="nav-items region"
          to={`/global-employement-solutions/Middle East & Africa`}
        >
          Middle East & Africa
        </Link>
        <Search setSearch={setSearch} countries={countries} />
      </div>
      <MobileAllCountries setSearch={setSearch} countries={countries} />
    </React.Fragment>
  );
};

export default AllCountries;
