import React from 'react'
import '../css/MyStyle.css'
export default function StyleSheet(props) {
    const clsPrimary =props.primary?"primary":""
    return (
        <div className={clsPrimary}>
            <h1>oh God, please bless us!</h1>
        </div>
    )
}
