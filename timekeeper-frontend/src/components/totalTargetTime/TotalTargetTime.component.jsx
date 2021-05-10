import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import './TotalTargetTime.scss' 
const TotalTargetTime=()=>{

    let timeArr=[]
    const handleChange=event=>{
      
            //timeArr.push(event.target.value)
            timeArr[parseInt(event.target.name)]=event.target.value
            if(parseInt(event.target.name)<5){
                document.getElementById(parseInt(event.target.name)+1).focus();
                document.getElementById(parseInt(event.target.name)+1).value='';
            }
            else{
                document.getElementById(parseInt(event.target.name)).blur();
            }

            console.log((parseInt(timeArr[0])*10+(parseInt(timeArr[1])))*60*60)    
    }
    const clearTxt=event=>{
        document.getElementById(parseInt(event.target.name)).value='';
    }
    return(
        <div className='timcardsContainer'>
            <input className='timeBox' placeholder='H' type='text' name='0' onFocus={clearTxt} id='0' value={timeArr[0]} maxlength='1' onChange={handleChange}>
            </input>
            <input className='timeBox' placeholder='H' type='text' name='1' onFocus={clearTxt} id='1' value={timeArr[1]} maxlength='1' onChange={handleChange}>
            </input>
            <div className='timerText'>H</div>
            <input className='timeBox' placeholder='M' type='text' name='2' onFocus={clearTxt} id='2' value={timeArr[2]} maxlength='1' onChange={handleChange}>
            </input>
            <input className='timeBox' placeholder='M' type='text' name='3' onFocus={clearTxt} id='3' value={timeArr[3]} maxlength='1' onChange={handleChange}>
            </input>
                <div className='timerText'>M</div>
                <input className='timeBox' placeholder='S' type='text' name='4' onFocus={clearTxt} id='4' value={timeArr[4]} maxlength='1' onChange={handleChange}>
            </input>
            <input className='timeBox' placeholder='S' type='text' name='5' onFocus={clearTxt} id='5' onfocus='this.value=""' value={timeArr[5]} maxlength='1' onChange={handleChange}>
            </input>
                <div className='timerText'>S</div>
            <Button
            variant="contained"
            color="primary"
            className='saveTimeBtn'
            startIcon={<CheckIcon />}
            >
                Save Time
            </Button>
           

        </div>

    )
}

export default TotalTargetTime;