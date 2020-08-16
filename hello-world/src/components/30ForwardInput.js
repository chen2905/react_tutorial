import React from 'react'

// function ForwardInput() {
//     return (
//         <div>
//             <input teyp="text"/>
//         </div>
//     )
// }

const ForwardInput = React.forwardRef((props,ref)=>{
    return (
        <div>
            <input teyp="text" ref={ref}/>
        </div>
    )
})

export default ForwardInput
