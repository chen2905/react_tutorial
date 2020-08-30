import React from 'react'
import ReactPlayer from 'react-player'
function VideoPlayer() {
    return (
        <div>
            <ReactPlayer controls url='https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12' width='60%' height='60%'
            onReady={()=>console.log('onReady callback')}
            onStart={()=>console.log('onStart callback')}
            onPause={()=>console.log('onPause callback')}
            onEnded={()=>console.log('onEnded callback')}
            onError={()=>console.log('onError callback')}
            />
        </div>
    )
}

export default VideoPlayer
