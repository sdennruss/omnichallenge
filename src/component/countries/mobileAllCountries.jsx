import React, { useState } from "react";
import MobileLinks from "./mobileLinks";

const MobileAllCountries = ({ setSearch, countries }) => {
  const [expand, setExpand] = useState(false);

  return (
    <React.Fragment>
      <div className="mobile-regions-container">
        <p className="region-navigation">Regions</p>
        <i
          onClick={() => setExpand(!expand)}
          className="fa fa-angle-down mobile"
        ></i>
      </div>
      {expand && (
        <MobileLinks
          setSearch={setSearch}
          countries={countries}
          expand={expand}
          setExpand={setExpand}
        />
      )}
    </React.Fragment>
  );
};

export default MobileAllCountries;
