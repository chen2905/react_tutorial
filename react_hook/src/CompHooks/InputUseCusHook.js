import React from 'react'
import useInput from '../CustomHooks/useInput'
function InputUseCusHook() {

    const [firstName, resetFirstname, bindFirstName] = useInput('')
    const [lastName, resetLastname, bindLastName] = useInput('')

    const submitHandler =(e)=>{
        e.preventDefault()
        alert(`welcome ${firstName} , ${lastName}`)
        resetFirstname()
        resetLastname()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>First Name</label>
                <input 
                {...bindFirstName} 
                type='text' />
                <label>Last Name</label>
                <input 
                {...bindLastName} 
                type='text' />
               <button>submit</button>
            </form>
        </div>
    )
}

export default InputUseCusHook
