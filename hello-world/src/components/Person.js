import React from 'react'

export default function Person({person}) {
    const {name, gender, age, skill} =person
    return (
        <div>
         <h2>God's follower: {name} is a {gender}, age is {age}, skill is {skill}</h2>
        </div>
    )
}
