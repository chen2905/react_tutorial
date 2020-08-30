import React,{useState,useEffect} from 'react'
import {BounceLoader,BarLoader,BeatLoader} from 'react-spinners'


function Loader() {
const [isLoading,setLoading] = useState(true)
useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false)
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

    return (
     
        <div>
            <h2>the loading is {String(isLoading)}</h2>
            <BounceLoader loading={isLoading}/>
            <br/>
            <BarLoader loading={isLoading}/>
            <br/>
            <BeatLoader loading={isLoading}/>
        </div>
    )
}

export default Loader
