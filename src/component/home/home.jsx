import React from "react";
import Americas from "../filterRegion/americas";
import Europe from "../filterRegion/europe";
import Asia from "../filterRegion/asia";
import MiddleEast from "../filterRegion/middleEast";
import { Link } from "react-router-dom";
import AllCountries from "../countries/allCountries";
import TextHero from "../hero/textHero";
import PopUp from "../pop-up/popUp";

const Home = ({
  search,
  setSearch,
  countries,
  popUpIndex,
  handlePopUp,
  setPopUpIndex,
}) => {
  const copyCountries = [...search];
  return (
    <React.Fragment>
      <TextHero />
      <AllCountries setSearch={setSearch} countries={countries} />

      <div className="outer-container">
        <h3 className="region-title">All Top Locations</h3>
        {popUpIndex && (
          <PopUp
            popUpIndex={popUpIndex}
            search={search}
            setPopUpIndex={setPopUpIndex}
          />
        )}
        <div className="regions-container">
          {copyCountries
            .filter((country) => country.fields.Region === "Americas")
            .slice(0, 12)
            .map((filteredRegion) => (
              <div
                key={filteredRegion.fields.Name}
                className="individual-country-container"
              >
                <div className="container one img">
                  {" "}
                  <img
                    className="cover-image"
                    alt=""
                    src={filteredRegion.fields.Сover}
                  />
                </div>
                <div className="details">
                  <div className="container one region">
                    <p className="region-text">
                      {filteredRegion.fields.Region}
                    </p>
                  </div>
                  <div className="container one flag">
                    <Link
                      onClick={() => handlePopUp(filteredRegion.fields.Name)}
                      className="link-region"
                    >
                      {filteredRegion.fields.Name}
                    </Link>
                    <img
                      className="flag"
                      alt=""
                      src={filteredRegion.fields.Flag}
                    />
                  </div>
                  <div className="container one">
                    <p className="small-text">
                      <span className="grey-text">Capital:</span>{" "}
                      {filteredRegion.fields.Capital}
                    </p>
                    <p className="small-text">
                      {" "}
                      <span className="grey-text">Currency: </span>
                      {filteredRegion.fields.Сurrency}
                    </p>
                    <p className="small-text">
                      {" "}
                      <span className="grey-text">Language: </span>
                      {filteredRegion.fields.Language}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Americas search={search} handlePopUp={handlePopUp} />
        <Europe search={search} handlePopUp={handlePopUp} />
        <Asia search={search} handlePopUp={handlePopUp} />
        <MiddleEast search={search} handlePopUp={handlePopUp} />
      </div>
    </React.Fragment>
  );
};

export default Home;
