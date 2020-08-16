import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {Greet} from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import FuncitonClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent'
// import UserGreeting from './components/UserGreeting'
// import NameList from './components/NameList'
// import StyleSheet from './components/StyleSheet'
// import Inline from './components/Inline'
// import FormComponent from './components/Form'
// import ComponentUpdatingLifecycle from './components/24componentUpdatingLifecycle'
// import FragmentDemo from './components/25Fragment'
// import Table from './components/25Table'
// import ParentComp from './components/26ParentComponent'
// import ForwardParentInput from './components/30ForwardParentInput'
// import Portal from './components/31Portal'
import Hero from './components/32ErrorBoundary'
import ErrorBoundary from './components/32ErrorBoundaryComp'
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
     <Hero heroName='Jesus'/>
     </ErrorBoundary>
     <ErrorBoundary>
     <Hero heroName='Joda'/>
     </ErrorBoundary>
   
    </div>
  );
}

export default App;
