import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./component/notFound/notFound";
import Countries from "./component/countries/countries";
import base from "./component/api/base";
import "./App.css";
import Home from "./component/home/home";
import NavBar from "./component/navigation/navbar";
import MobileToggle from "./component/navigation/mobileToggle";
import { CountryContext } from "./component/context/countryContext";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);
  const [popUpIndex, setPopUpIndex] = useState("");

  const handleAirTableCountries = () => {
    base("Countries")
      .select({ view: "Grid view", maxRecords: 160 })
      .eachPage((records) => {
        setCountries(records) || setSearch(records);
      });
  };
  useEffect(() => {
    handleAirTableCountries();
  }, []);

  const handlePopUp = (name) => {
    const filterIndex = search.findIndex((p) => p.fields.Name === name);
    setPopUpIndex(filterIndex);
  };

  return (
    <React.Fragment>
      <NavBar />
      <MobileToggle />

      <CountryContext.Provider
        value={{
          countries,
          search,
          popUpIndex,
          setSearch,
          handlePopUp,
          setPopUpIndex,
        }}
      >
        <div className="routing-container">
          <Switch>
            <Route
              path="/global-employement-solutions/:region"
              render={(props) => <Countries {...props} />}
            />
            <Route
              path="/global-employement-solutions"
              render={(props) => <Home {...props} />}
            />
            <Route path="/" exact render={(props) => <Home {...props} />} />
            <Route path="/" component={NotFound} />
          </Switch>
        </div>
      </CountryContext.Provider>
    </React.Fragment>
  );
}

export default App;
