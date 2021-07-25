import React, { useState } from "react";
import MobileNav from "./mobileNav";
import { ReactComponent as Logo } from "./assets/logo.svg";

const MobileToggle = () => {
  const [expand, setExpand] = useState(false);

  return (
    <React.Fragment>
      <div className="mobile-menu-container">
        <Logo className="logo mobile" />
        <p className="mobile-navigation" onClick={() => setExpand(!expand)}>
          Menu
        </p>
      </div>
      {expand && <MobileNav expand={expand} setExpand={setExpand} />}
    </React.Fragment>
  );
};

export default MobileToggle;
