import React, { useContext } from "react";
import { CountryContext } from "../context/countryContext";

const RegionDescription = () => {
  const { region } = useContext(CountryContext);
  return (
    <div className="region-description">
      <p className="para-text">Global Empoyement Solution & PEO in {region}</p>
      <h2 className="region-title description">{region}</h2>
      <p>
        Employ talent anywhere in the Americas. Contact us as a starting point
        for your global expansion plans.
      </p>
    </div>
  );
};

export default RegionDescription;
