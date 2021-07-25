import React, { useState } from "react";
import MobileLinks from "./mobileLinks";

const MobileAllCountries = () => {
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
      {expand && <MobileLinks expand={expand} setExpand={setExpand} />}
    </React.Fragment>
  );
};

export default MobileAllCountries;
