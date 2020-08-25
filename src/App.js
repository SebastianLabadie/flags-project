import React from "react";
import "./App.css";
import CountryList from "./Components/Country-List";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./Redux/Reducer";
import ActionList from "./Components/Action-List";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CountryPage from './Pages/Country-Page'


const initialState = {
  countryList: [],
  countryListByName: [],
  coutryFilteredByRegion: [],
  filterByRegion: "",
};

const store = createStore(Reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/country/:name" component={CountryPage}/>
          <Route exact path="/">
            <ActionList />
            <CountryList />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
