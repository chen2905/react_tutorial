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
import DatePicker from './components/DatePicker';
import VideoPlayer from './components/VideoPlayer';
import Loader from './components/Loader';
import { Line } from 'react-chartjs-2';
import LineChart from './components/LineChart';

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
        <IdleTimerContainer />

      </div>
      <div className="AppLift">
        <ColorPicker />
        <CreditCard />
        
        <DatePicker />

      </div>
      <div className="AppLift">
      <VideoPlayer />
      <Loader/>
      <LineChart/>
        </div>
    </React.Fragment>
  );
}

export default App;
