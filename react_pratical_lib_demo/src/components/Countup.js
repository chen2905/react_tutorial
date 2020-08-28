import React from 'react'
import CountUp, { useCountUp } from 'react-countup'
function Countup() {

    const randomNum = Math.floor((Math.random() * 1000) + 1);
    const { countUp, start, pauseResume, reset, update } = useCountUp({
        duration: 5,
        end: 10000
    })


    return (
        <div>
            <h3>Countup demo</h3>
            <h5><CountUp end={200} /></h5>
            <h5>You won: <CountUp end={randomNum} prefix='$' duration={5} /></h5>

            <h2>
                <p>{countUp}</p>
                <p><button onClick={start}>Start</button></p>
                <p><button onClick={reset}>Reset</button></p>
                <p><button onClick={pauseResume}>Pause Resume</button></p>
                <p><button onClick={() => update(529)}>Update to 529</button></p>
            </h2>


        </div>
    )
}

export default Countup
