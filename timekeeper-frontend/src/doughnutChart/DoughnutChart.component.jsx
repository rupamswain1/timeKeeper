import React from 'react';
import {useSelector} from 'react-redux';
import {Doughnut} from 'react-chartjs-2';
import './DoughnutChart.style.scss';
const DoughnutChart=()=>{
    const {key,data}=useSelector(state=>state.SubmitDataReducer);
    let chartLabels=[];
    let taskHour=[];
    let bgColors=[]
    let borderColors=[]
    console.log(data[key]);
    console.log(Object.keys(data[key]).length)
    if(Object.keys(data).length>0){
    let obj=data[key].taskData;
    console.log(obj)
    for(var k in obj){
        chartLabels.push(k.toUpperCase());
        
        taskHour.push(((obj[k].time)/3600).toFixed(2))
        bgColors.push(obj[k].color)
        borderColors.push('rgb(0,0,0)')
        }
    }
   
    const Doughnutdata = {
        labels: chartLabels,
        datasets: [
          {
            label: '# of Votes',
            data: taskHour,
            backgroundColor: bgColors,
            borderColor: borderColors,
            borderWidth: 5,
            hoverOffset: 20
          },
        ],
      };
    return(
        <div className='doughnutChartContainer'>
            {Object.keys(data[key]).length>0?
            <Doughnut data={Doughnutdata}/>
            :''}
        </div>
    )
}

export default DoughnutChart;
