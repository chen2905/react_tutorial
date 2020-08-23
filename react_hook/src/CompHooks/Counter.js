import React, { useState , useMemo } from 'react'

function Counter() {

    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)


    const handleClickOne = () => {
        setCountOne(countOne + 1)

    }
    const handleClickTwo = () => {
        setCountTwo(countTwo + 1)

    }
    const countOneIsEven = useMemo(() => {
        let i=0
        for(i=0;i<2000000000;i++){

        }

        if (countOne % 2 === 0) {
            console.log('even')
            return 'Is Even'
        } else {
            console.log('odd')
            return 'Is Odd'
        }
    },[countOne])
    return (
        <div>
            <div>Count one is {countOneIsEven}</div>
            <div><button onClick={handleClickOne}>Count one -{countOne}</button></div>
            <div><button onClick={handleClickTwo}>Count two -{countTwo}</button></div>
        </div>
    )
}

export default Counter
