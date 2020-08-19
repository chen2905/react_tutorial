import React,{useState} from 'react'

function HookCounter4() {

const[Items,setItem] =useState([])

const handleItem=()=>{
    setItem(
        [
        ...Items,
        {id:Items.length,
        value:Items.length
        }
    ]
    )
}
    return (
        <div>
            <button onClick={handleItem}>Add a new item to items</button>
            <ul>
            {
                Items.map(item=>(
                    <li key={item.id}>{item.value}</li>
                )
                   
                )
               
            } 
            </ul>
        </div>
    )
}

export default HookCounter4
