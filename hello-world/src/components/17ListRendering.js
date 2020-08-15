import React from 'react'
import Person from './Person'
function NameList() {
    const names = ['John', 'Marry', 'Josef']
  

    const GodsPeopleList = [
        {
            id:1,
            name: 'John',
            gender: 'Male',
            age: 46,
            skill: 'Sales'
        },
        {
            id:2,
            name: 'Chen',
            gender: 'Male',
            age: 46,
            skill: 'Programming'
        },
        {
            id:3,
            name: 'Krishna',
            gender: 'Male',
            age: 40,
            skill: 'Database'
        },
    ]
    let messageList = GodsPeopleList.map((person,index) => {
    return <Person key={index} person={person} />
    })
    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}

            {
                messageList

            }
        </div>
    )
}

export default NameList
