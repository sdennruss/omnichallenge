import React from "react";
import { Link } from "react-router-dom";

const CountryByRegion = ({ search, handlePopUp, id }) => {
  return (
    <React.Fragment>
      <div className="individual-country-container">
        <div className="container one img">
          {" "}
          <img className="cover-image" alt="" src={search.Сover} />
        </div>
        <div className="details">
          <div className="container one region">
            <p className="region-text">{search.Region}</p>
          </div>
          <div className="container one flag">
            <Link
              onClick={() => handlePopUp(search.Name)}
              className="link-region"
            >
              {search.Name}
            </Link>
            <img className="flag" alt="" src={search.Flag} />
          </div>
          <div className="container one">
            <p className="small-text">
              <span className="grey-text">Capital:</span> {search.Capital}
            </p>
            <p className="small-text">
              {" "}
              <span className="grey-text">Currency: </span>
              {search.Сurrency}
            </p>
            <p className="small-text">
              {" "}
              <span className="grey-text">Language: </span>
              {search.Language}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CountryByRegion;
