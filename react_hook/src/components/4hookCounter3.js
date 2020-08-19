import React, { useState } from 'react'

function HookCounter3() {

    const iniNameObject = { firstName: '', lastName: '' }
    const [name, setName] = useState(iniNameObject)
    return (
//...name is copy the existing object and you just need to overwrite the bit you need
        <React.Fragment>  
        <form>
            first name: <input type='text' 
                        value={name.firstName} 
                        onChange={e=>setName({...name,firstName:e.target.value})} />
             last name : <input type='text' 
                                value={name.lastName} 
                                onChange={e=>setName({...name,lastName:e.target.value})}/>
            <h2>Your first name is{name.firstName}</h2>
            <h2>Your last name is{name.lastName}</h2>
    <h3>{JSON.stringify(name)}</h3>
        </form>
        </React.Fragment>
    )
}

export default HookCounter3
