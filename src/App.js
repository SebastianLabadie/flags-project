import React from 'react';
import './App.css';
import CountryList from './Components/Country-List'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './Redux/Reducer'
import ActionList  from './Components/Action-List'


const initialState = {
  countryList: [],
  countryListByName: [],
  coutryFilteredByRegion: [],
  filterByRegion: '',
}


const store = createStore(Reducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <i className="far fa-moon"></i>
      <div className="App">
        <ActionList />
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;