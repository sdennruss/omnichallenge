import React from "react";
import { Link } from "react-router-dom";

const MobileNav = ({ expand, setExpand }) => {
  const navigations = ["Services", "Global Reach", "About Us", "Resources"];

  console.log(expand);
  return (
    <React.Fragment>
      <div className="mobile-navigation-container">
        <ul className="mobile-unlisted-nav">
          {navigations.map((item) => (
            <li key={item} className="mobile-listed-nav">
              <Link
                onClick={() => setExpand(!expand)}
                className="mobile-nav"
                key={item}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default MobileNav;
