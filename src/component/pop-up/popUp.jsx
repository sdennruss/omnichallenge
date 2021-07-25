import React from "react";

const PopUp = ({ popUpIndex, search, setPopUpIndex }) => {
  return (
    <React.Fragment>
      <div>
        <div className="pop-up-container">
          <p className="OmniAtlas">OmniAtlas Employment Rating</p>

          <div className="pop-details">
            <div className="pop-left">
              <div>
                <h3 className="pop-up-text">
                  {search[popUpIndex].fields.Name}
                </h3>
                <img
                  alt="flag"
                  className="flag"
                  src={search[popUpIndex].fields.Flag}
                />
              </div>
              <p className="pop-up-text">
                Capital: {search[popUpIndex].fields.Capital}
              </p>
              <p className="pop-up-text">
                Language: {search[popUpIndex].fields.Language}
              </p>
              <p className="pop-up-text">
                Currency: {search[popUpIndex].fields.Сurrency}
              </p>
            </div>
            <div className="pop-right">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has
              </p>
            </div>
          </div>

          <div onClick={() => setPopUpIndex("")} className="close-pop-up ">
            <p className="close">close</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PopUp;
