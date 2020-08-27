import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AiFillTwitterCircle} from 'react-icons/ai'
import {MdFavorite} from 'react-icons/md'
import {IconContext} from 'react-icons'
function App() {
  const clickHandler=()=>{
    alert('I love you, God')
  }
  return ( <IconContext.Provider value={{color:'red',size:'15rem'}}>
    <div className="App">
      <AiFillTwitterCircle color='blue'/>
      <MdFavorite onClick={clickHandler}/>
    </div>
    </IconContext.Provider>
  );
}

export default App;
