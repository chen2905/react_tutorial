import React,{useState} from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
function DatePicker() {
    const [selectedDate,setSelectedDate] =useState(null)
    return (
        <div>
            <h3>Date Picker</h3>
            <ReactDatePicker 
            selected={selectedDate} 
            onChange={(date)=>setSelectedDate(date)}
            dateFormat='dd/MM/yyyy'
            minDate={new Date()}
            filterDate={date=>date.getDay()!=6 && date.getDay()!=0}
            isClearable 
            showYearDropdown
            scrollableMonthYearDropdown
            />
        </div>
    )
}

export default DatePicker
