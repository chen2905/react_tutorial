import React from 'react'
import {Line, Bar,Doughnut} from 'react-chartjs-2'
function LineChart() {

    const data ={
        labels:['Jan','Feb','Mar','Apr','May'],
        datasets:[
            {
                label:'Sales for 2020 (M)',
                data:[41,55,94,83,101],
                backgroundColor:'#3934B0'
            },
            {
                label:'Sales for 2019 (M)',
                data:[90,80,154,120,159],
                backgroundColor:'#A97878'
            }
        ]

    }
    
    const options={
     scales:{
         yAxes:[
             {
                 ticks:{
                     min:0,
                     max:200,
                     stepSize:10
                 }
             }
         ]
     }       
    }
    return (
        <div className='chart'>
            <Line data={data} options={options}/>
            <Bar data={data} options={options}/>
            <Doughnut  data={data} options={options}/>
            </div>
        
    )
}

export default LineChart
 