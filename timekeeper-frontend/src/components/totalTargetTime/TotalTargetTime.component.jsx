import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import {saveTotalTime} from '../../redux/totalTime/TotalTime.action';
import './TotalTargetTime.scss' 
const TotalTargetTime=()=>{
    const dispatch=useDispatch();
    const {key,totalTime}=useSelector(state=>state.TotalTimeReducer);
    let timeArr=[]
    //console.log(timeArr)
    const handleChange=event=>{
            if((totalTime[key]!=undefined)&&(totalTime[key][getFullDate()]!=undefined)){
                timeArr=totalTime[key][getFullDate()]
            }
            //timeArr.push(event.target.value)
            timeArr[parseInt(event.target.name)]=event.target.value
            if(parseInt(event.target.name)<5){
                document.getElementById(parseInt(event.target.name)+1).focus();
                document.getElementById(parseInt(event.target.name)+1).value='';
            }
            else{
                document.getElementById(parseInt(event.target.name)).blur();
            }
            console.log(timeArr)
           //console.log((parseInt(timeArr[0])*10+(parseInt(timeArr[1])))*60*60)    
    }
    const clearTxt=event=>{
        document.getElementById(parseInt(event.target.name)).value='';
    }
    let newTime=undefined
    const getFullDate=()=>{
        let newDate=new Date()
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            return(date.toString()+month.toString()+year.toString());
    }
    const submitTime=()=>{
        
        dispatch(saveTotalTime(timeArr))
        
            console.log(totalTime[key][getFullDate()])
             newTime=totalTime[key][getFullDate()];
        console.log(newTime)
    }
    return(
        <div className='timcardsContainer'>
            <input className='timeBox' placeholder='H' type='text' name='0' onFocus={clearTxt} id='0' value={newTime?newTime[0]:timeArr[0]} maxlength='1' onChange={handleChange}>
            </input>
            <input className='timeBox' placeholder='H' type='text' name='1' onFocus={clearTxt} id='1' value={newTime?newTime[1]:timeArr[1]} maxlength='1' onChange={handleChange}>
            </input>
            <div className='timerText'>H</div>
            <input className='timeBox' placeholder='M' type='text' name='2' onFocus={clearTxt} id='2' value={newTime?newTime[2]:timeArr[2]} maxlength='1' onChange={handleChange}>
            </input>
            <input className='timeBox' placeholder='M' type='text' name='3' onFocus={clearTxt} id='3' value={newTime?newTime[3]:timeArr[3]} maxlength='1' onChange={handleChange}>
            </input>
                <div className='timerText'>M</div>
                <input className='timeBox' placeholder='S' type='text' name='4' onFocus={clearTxt} id='4' value={newTime?newTime[4]:timeArr[4]} maxlength='1' onChange={handleChange}>
            </input>
            <input className='timeBox' placeholder='S' type='text' name='5' onFocus={clearTxt} id='5' onfocus='this.value=""' value={newTime?newTime[5]:timeArr[5]} maxlength='1' onChange={handleChange}>
            </input>
                <div className='timerText'>S</div>
            <Button
            variant="contained"
            color="primary"
            className='saveTimeBtn'
            startIcon={<CheckIcon />}
            onClick={()=>submitTime()}
            >
                Save Time
            </Button>
           

        </div>

    )
}

export default TotalTargetTime;