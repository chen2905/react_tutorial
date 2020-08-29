import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
function CreditCard() {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [expire, setExpire] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')

    return (
        <div>
            <Cards
                name={name}
                number={number}
                xpiry={expire}
                cvc={cvc}
                focused={focus}
            />
            <form>
                card name:  <input
                    type='text'
                    name='name'
                    value={name}
                    placeholder='Card Holder Name'
                    onChange={(e) => setName(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                /><br/>
             card number:   <input
                    type='tel'
                    name='number'
                    value={number}
                    placeholder='Card Number'
                    onChange={(e) => setNumber(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                /><br/>
            Expire:   <input
                    type='text'
                    name='expire'
                    value={expire}
                    placeholder='MM/YY'
                    onChange={(e) => setExpire(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                /><br/>
            cvc:   <input
                    type='text'
                    name='cvc'
                    value={cvc}
                    placeholder=''
                    onChange={(e) => setCvc(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                />
            </form>
        </div>
    )
}

export default CreditCard
