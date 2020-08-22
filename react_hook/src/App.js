import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';

//import DataFetchUseReducer from './components/DataFetchUseReducer'
import ParentComp from './CompHooks/ParentComp'
function App() {
 
  return (
    <div className="App">
     <ParentComp/>
    </div>
  );
}

export default App;
