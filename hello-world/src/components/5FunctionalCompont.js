import React from 'react'


export const Greet = (props) => {
 const   {name,heroname,children} =props
    return (
        <div>
            <h1>Hello {name}, thank you so much!
            Please bless your hero {heroname} from Greet component</h1>
            {children}
        </div>

    )

}

//export default Greet
