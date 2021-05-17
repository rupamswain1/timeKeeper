import React from 'react';
import {useSelector} from 'react-redux';
import {Bar} from 'react-chartjs-2';
import './timeComparisonBarChart.style.scss'
const TimeComparisonBarChart=()=>{
    const {key,data}=useSelector(state=>state.SubmitDataReducer);
    //onst TotalTimeReducer=useSelector(state=>state.TotalTimeReducer);
    let chartLabels=[];
    let taskHour=[];
    let bgColors=[]
    let borderColors=[]
    //console.log(data[key]);
    //console.log(Object.keys(data[key]).length)
    if(Object.keys(data).length>0){
    let obj=data[key].taskData;
    console.log(obj)
    for(var k in obj){
        chartLabels.push(k.toUpperCase());
        
        taskHour.push(((obj[k].time)/3600).toFixed(4))
        bgColors.push(obj[k].color)
        borderColors.push('rgb(0,0,0)')
        }
    }
   chartLabels.push('Estimated Total Time');
   let TotalTimeReducer=data[key].totalTimeData
   let originalTimeKey=Object.keys(TotalTimeReducer.originalTime[TotalTimeReducer.key])[0];
   taskHour.push((TotalTimeReducer.originalTime[TotalTimeReducer.key][originalTimeKey]/3600).toFixed(2));
   bgColors.push('rgb(28,16,133)');
   borderColors.push('rgb(0,0,0)');
   let actualTime=0;
   if(TotalTimeReducer.totalTime[TotalTimeReducer.key][originalTimeKey]<0){
        actualTime=(-1*TotalTimeReducer.totalTime[TotalTimeReducer.key][originalTimeKey])+TotalTimeReducer.originalTime[TotalTimeReducer.key][originalTimeKey]
   }
   else{
       actualTime=TotalTimeReducer.totalTime[TotalTimeReducer.key][originalTimeKey];
   }
   chartLabels.push('Actual Total Time');
   taskHour.push((actualTime/3600).toFixed(2));
   bgColors.push('rgb(222, 11, 39)');
   borderColors.push('rgb(0,0,0)');
    const Doughnutdata = {
        labels: chartLabels,
        datasets: [
          {
            label: 'Time Comparison Chart',
            data: taskHour,
            backgroundColor: bgColors,
            borderColor: borderColors,
            borderWidth: 5,
            hoverOffset: 20
          },
        ],
      };
    return(
        <div className='timeConparisonBarChartContainer'>
            {Object.keys(data).length>0 && Object.keys(data[key]).length>0?
            <Bar data={Doughnutdata}/>
            :''}
        </div>
    )
}

export default TimeComparisonBarChart;
