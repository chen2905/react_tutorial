import React from 'react'
import useInput from '../CustomHooks/useInput'
function InputUseCusHook() {

    const [firstName, resetFirstname, bindingFirstName] = useInput('')
    const [lastName, resetLastname,bindingLastName] = useInput('')

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
                {...bindingFirstName} 
                type='text' />
                <label>Last Name</label>
                <input 
                {...bindingLastName} 
                type='text' />
               <button>submit</button>
            </form>
        </div>
    )
}

export default InputUseCusHook
