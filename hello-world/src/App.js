import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FuncitonClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'
import FormComponent from './components/Form'

function App() {
  return (
    <div className="App">
      {/* <Greet name="God"heroname="John"><button>Worship God!</button></Greet> */}

      {/* <Welcome name="God"heroname="John"><button>Worship God!</button></Welcome> */}
      {/* <FuncitonClick/> */}

      {/* <ClassClick/> */}
      <FormComponent/>
    </div>
  );
}

export default App;
