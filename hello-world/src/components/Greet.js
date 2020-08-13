import React from 'react'


export const Greet = (props) => {
    return (
        <div>
            <h1>Hello {props.name}, thank you so much!
            Please bless your hero {props.heroname} from Greet component</h1>
            {props.children}
        </div>

    )

}

//export default Greet
