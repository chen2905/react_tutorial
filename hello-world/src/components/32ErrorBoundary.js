import React from 'react'

function hero({heroName}) {
    if(heroName==='Joda'){
        throw new Error('Not a hero!')
    }
    return (
        <div>
          <h1>{heroName}</h1>  
        </div>
    )
}

export default hero
