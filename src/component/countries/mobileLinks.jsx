import React from "react";
import { Link } from "react-router-dom";

const MobileLinks = ({ expand, setExpand }) => {
  return (
    <div className="regions-link-container">
      <Link
        onClick={() => setExpand(!expand)}
        className="nav-items region"
        to={`/global-employement-solutions`}
      >
        All
      </Link>
      <Link
        onClick={() => setExpand(!expand)}
        className="nav-items region"
        to={`/global-employement-solutions/americas`}
      >
        Americas
      </Link>
      <Link
        onClick={() => setExpand(!expand)}
        className="nav-items region"
        to={`/global-employement-solutions/europe`}
      >
        Europe
      </Link>
      <Link
        onClick={() => setExpand(!expand)}
        className="nav-items region"
        to={`/global-employement-solutions/asia pacific`}
      >
        Asia Pacific
      </Link>
      <Link
        onClick={() => setExpand(!expand)}
        className="nav-items region"
        to={`/global-employement-solutions/Middle East & Africa`}
      >
        Middle East & Africa
      </Link>
    </div>
  );
};

export default MobileLinks;
