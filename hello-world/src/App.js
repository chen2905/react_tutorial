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
function App() {
  return (
    <div className="App">
      {/* <Greet name="God"heroname="John"><button>Worship God!</button></Greet> */}

      {/* <Welcome name="God"heroname="John"><button>Worship God!</button></Welcome> */}
      {/* <FuncitonClick/> */}

      <ClassClick/>
    </div>
  );
}

export default App;
