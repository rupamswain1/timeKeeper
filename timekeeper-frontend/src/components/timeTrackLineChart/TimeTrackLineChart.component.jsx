import React from 'react';
import {useSelector} from 'react-redux';
import {Line} from 'react-chartjs-2';

const TimeTrackerLineChart=()=>{
    const {key,data}=useSelector(state=>state.SubmitDataReducer);
    //onst TotalTimeReducer=useSelector(state=>state.TotalTimeReducer);
    let chartData={}
    let display=false;
    if(Object.keys(data).length>0 && Object.keys(data[key]).length>0) {
      let chartLabels=[];
      let taskHour=[];
      let bgColors=[]
      let borderColors=[]
      let xAxis=[];
      //console.log(data[key]);
      //console.log(Object.keys(data[key]).length)
      let dataSet=[];
      var originalTimeData={
          label:'Estimated Time',
          data:[],
          fill:false,
          borderColor:'rgb(93, 66, 245)',
          tension:0.1
      }
      var TotalTimeData={
        label:'Actual Time',
        data:[],
        fill:false,
        borderColor:'rgb(245, 5, 25)',
        tension:0.1
    }
      if(Object.keys(data).length>0){
      
      for(var k in data){
          xAxis.push(data[k].date)
          var keyLocal=data[k].totalTimeData.key
          for(var origTimeKey in data[k]['totalTimeData'].originalTime[keyLocal]){
            originalTimeData.data.push(data[k].totalTimeData.originalTime[keyLocal][origTimeKey])
          }
          for(var totalTimeKey in data[k].totalTimeData[keyLocal].totalTime[keyLocal]){
              var actualTime=0;
            if(data[k].totalTimeData[keyLocal].totallTime[keyLocal][totalTimeKey]<0){
                actualTime=(-1*data[k].totalTimeData[key].totallTime[keyLocal][totalTimeKey])+data[k].totalTimeData[keyLocal].originalTime[keyLocal][totalTimeKey]
            }
             else{
              actualTime=data[k].totalTimeData[key].totallTime[key][totalTimeKey];
             }
            TotalTimeData.data.push(actualTime)
          }
      }
      dataSet=[originalTimeData,TotalTimeData]
  
   
      display=true
    }
    return(
        <div className={`timeConparisonBarChartContainer-${display?'':'hideBarChartContainer'}`}>
            {Object.keys(data).length>0 && Object.keys(data[key]).length>0?
            <Line data={dataSet}/>
            :''}
        </div>
    )
}
}

export default TimeTrackerLineChart;
