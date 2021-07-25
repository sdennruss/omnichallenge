import React from "react";
import AllCountries from "./allCountries";
import CountryByRegion from "./countryByRegion";
import { Link } from "react-router-dom";
import RegionDescription from "./regionDescription";
import PopUp from "../pop-up/popUp";

const Countries = ({
  match,
  search,
  setSearch,
  countries,
  popUpIndex,
  handlePopUp,
  setPopUpIndex,
}) => {
  const {
    params: { region },
  } = match;

  return (
    <React.Fragment>
      <div className="outer-countries">
        <AllCountries setSearch={setSearch} countries={countries} />

        <RegionDescription region={region} />
        {popUpIndex && (
          <PopUp
            popUpIndex={popUpIndex}
            search={search}
            setPopUpIndex={setPopUpIndex}
          />
        )}

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
                id={filteredRegion.id}
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
