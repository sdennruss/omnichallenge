import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./component/notFound/notFound";
import Countries from "./component/countries/countries";
import base from "./component/api/base";
import "./App.css";
import Home from "./component/home/home";
import NavBar from "./component/navigation/navbar";
import MobileToggle from "./component/navigation/mobileToggle";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);
  const [popUpIndex, setPopUpIndex] = useState("");

  useEffect(() => {
    base("Countries")
      .select({ view: "Grid view" })
      .eachPage((records) => {
        setCountries(records) || setSearch(records);
      });
  }, []);

  const handlePopUp = (name) => {
    const filterIndex = search.findIndex((p) => p.fields.Name === name);
    setPopUpIndex(filterIndex);
  };

  return (
    <React.Fragment>
      <NavBar />
      <MobileToggle />

      <div className="routing-container">
        <Switch>
          <Route
            path="/global-employement-solutions/:region"
            render={(props) => (
              <Countries
                setSearch={setSearch}
                search={search}
                countries={countries}
                handlePopUp={handlePopUp}
                popUpIndex={popUpIndex}
                setPopUpIndex={setPopUpIndex}
                {...props}
              />
            )}
          />
          <Route
            path="/global-employement-solutions"
            render={(props) => (
              <Home
                setSearch={setSearch}
                countries={countries}
                search={search}
                handlePopUp={handlePopUp}
                popUpIndex={popUpIndex}
                setPopUpIndex={setPopUpIndex}
                {...props}
              />
            )}
          />
          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                setSearch={setSearch}
                countries={countries}
                search={search}
                handlePopUp={handlePopUp}
                popUpIndex={popUpIndex}
                setPopUpIndex={setPopUpIndex}
                {...props}
              />
            )}
          />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
