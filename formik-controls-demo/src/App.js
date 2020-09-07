import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormikContainer from './components/FormikContainer';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import EnrolmentForm from './components/EnrolmentForm';
import {Theme,ThemeProvider} from '@chakra-ui/core'

function App() {
  return (
 
    <div className="App">
     {/* <FormikContainer></FormikContainer> */}
     {/* <LoginForm/> */}
     {/* <RegistrationForm/> */}
     <EnrolmentForm/>
    </div>

  );
}

export default App;
