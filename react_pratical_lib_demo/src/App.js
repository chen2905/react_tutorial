import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from './components/Icon'
import Modal from './components/ModalReact'
//TOAST NOTIFY
import ToolTip from './components/ToolTip';
import Countup from './components/Countup';

function App() {
  return (

    <React.Fragment>
      <div className="app">  
        <Icon />

        <Modal />
        
        <ToolTip />
       
       <Countup/>
        </div>
    </React.Fragment>
  );
}

export default App;
