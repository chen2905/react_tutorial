import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store'
import { Provider } from 'react-redux'
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HookIceCreamContainer from './components/HookIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/itemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <ItemContainer cake/>
        <ItemContainer/>
        
        <HookCakeContainer />
        <CakeContainer />
        <NewCakeContainer/>
        <HookIceCreamContainer/>
        <IceCreamContainer />
        <UserContainer/>
      </div>
    </Provider>
  )
}

export default App;
