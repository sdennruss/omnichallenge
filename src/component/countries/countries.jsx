import React, { useContext } from "react";
import AllCountries from "./allCountries";
import CountryByRegion from "./countryByRegion";
import { Link } from "react-router-dom";
import RegionDescription from "./regionDescription";
import PopUp from "../pop-up/popUp";
import { CountryContext } from "../context/countryContext";

const Countries = ({ match }) => {
  const {
    params: { region },
  } = match;

  const {
    countries,
    search,
    popUpIndex,
    setSearch,
    handlePopUp,
    setPopUpIndex,
  } = useContext(CountryContext);

  return (
    <React.Fragment>
      <div className="outer-countries">
        <CountryContext.Provider
          value={{
            countries,
            search,
            popUpIndex,
            setSearch,
            handlePopUp,
            setPopUpIndex,
            region,
          }}
        >
          <AllCountries />

          <RegionDescription />
          {popUpIndex && <PopUp />}
        </CountryContext.Provider>
        <div className="regions-container all">
          {search
            .filter(
              (country) =>
                country.fields.Region.toLowerCase() === region.toLowerCase(),
            )
            .map((filteredRegion) => (
              <CountryByRegion
                key={filteredRegion.id}
                search={filteredRegion.fields}
                handlePopUp={handlePopUp}
              />
            ))}
        </div>
        <div className="see-all-container">
          <Link to={`/global-employement-solutions`} className="see-all">
            {" "}
            Back{" "}
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Countries;
