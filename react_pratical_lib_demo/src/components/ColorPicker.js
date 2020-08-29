import React, { useState } from 'react'
import {ChromePicker} from 'react-color'
function ColorPicker() {
    const [color, SetColor] = useState('#FFF')
    const [showColorPicker, setShowHide] = useState(false)
    const handleColorOnChange = (newColor) => {
        SetColor(newColor)
    }
    return (
        <div>
            <button onClick={()=>setShowHide(!showColorPicker)}>{showColorPicker?<h4>Close Color Picker</h4>:<h4>Open Color picker</h4>}</button>
            {showColorPicker&&<ChromePicker color={color} onChange={newColor=> SetColor(newColor.hex)} />}

            <h3>The color you picked is {color}</h3>
        </div>
    )
}

export default ColorPicker
