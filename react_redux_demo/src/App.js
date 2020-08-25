import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/cake/store'
import {Provider} from 'react-redux'
import HookCakeContainer from './components/HookCakeContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HookCakeContainer/>
    <CakeContainer/>
    </div>
    </Provider>
  )
}

export default App;
