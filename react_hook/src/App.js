import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/44classCounter'
//import HookCounter from './components/44hookCounter'
//import HookCounter2 from './components/45hookCounter2'
//import HookCounter3 from  './components/4hookCounter3'
//import HookCounter4 from './components/5HookCounter4'
// import HookEffectOnce from './components/8UseEffectHook'
// import UseEffectContainer from './components/10useEffectContainer'
// import HookCounter5 from './components/11HookCounter5'
// import UseEffectFetchSingleData from './components/13UseEffectFetchSingleData'
// import ComponentC from './components/ComponentC'

//export const NameContext = React.createContext()
//export const ActionContext = React.createContext()
import CounterUserReducer2 from './components/CounterUseReducer2'
function App() {


  return (
    <div className="App">
      <CounterUserReducer2 />
      {/* <NameContext.Provider value='God'>
        <ActionContext.Provider value='bless us please!'>
          <ComponentC />
        </ActionContext.Provider>
      </NameContext.Provider> */}

    </div>
  );
}

export default App;
