import React from 'react';
import './App.css';
import CountryList from './Components/Country-List'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {Region} from './Components/Region';

const initialState = {
  countryList: [],
  coutryFilteredByRegion: [],
  filterByRegion: '',
}

function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case 'SET_COUNTRY_LIST': {
      return { ...state, countryList: action.payload}
    }

    case 'FILTER_BY_REGION': {
      const {regionSelected} = action.payload;

      if ('' === regionSelected) {
        return {...state, coutryFilteredByRegion: [], filterByRegion: '',};
      }

      const coutryFilteredByRegion = state.countryList.filter((country) => country.region === regionSelected);

      return { ...state, coutryFilteredByRegion, filterByRegion: regionSelected}
    }

    default: {
      return state
    }
  }
}

const store = createStore(reducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Region />
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;