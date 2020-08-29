import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from './components/Icon'
import Modal from './components/ModalReact'
//TOAST NOTIFY
import ToolTip from './components/ToolTip';
import Countup from './components/Countup';
import IdleTimerContainer from './components/IdleTimerContainer';
import ColorPicker from './components/ColorPicker';
import CreditCard from './components/CreditCard';

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
      <div className="AppLift">
     <ColorPicker/>
     <CreditCard/>
      </div>
    </React.Fragment>
  );
}

export default App;
