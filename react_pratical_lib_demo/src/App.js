import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from './components/Icon'
import Modal from './components/ModalReact'
//TOAST NOTIFY
import ToolTip from './components/ToolTip';
import Countup from './components/Countup';
import IdleTimerContainer from './components/IdleTimerContainer';

function App() {
  return (

    <React.Fragment>
      <div className="AppLift">
        <Icon />
        <Modal />
        <ToolTip />
      </div>
      <div className="AppLift">
        <Countup />
        <IdleTimerContainer/>
      </div>
    </React.Fragment>
  );
}

export default App;
