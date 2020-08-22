import React, { useState,useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComp() {
    const [age, setAge] = useState(40)
    const [salary, setSalary] = useState(108000)

    const increaseAge =useCallback(()=>{
        setAge(age+1)
    },[age])
    const increaseSalary=useCallback(()=>{
        setSalary(salary+5000)
    },[salary])
    return (
        <div>
            <Title text='useCall hook demo' />
            <Count text='Age' count={age} />
            <Button text='Increase Age' clickHandle={increaseAge}/>
            <Count text='salary' count={salary} />
            <Button text='Increase salary'clickHandle ={increaseSalary}/>
        </div>
    )
}

export default ParentComp
