import React from 'react';
import {useDispatch} from 'react-redux';
import {removeTask,pauseTask,startTask,completeTask} from '../../redux/task/Task.action'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import Tooltip from '@material-ui/core/Tooltip';
const AddedTask=({completed,bgColor,taskName,paused,percentage,type,time})=>{
    
    const dispatch=useDispatch();
    const containerStyle={
        position:'relative',
        height:'15%',
        width:'100%',
        backgroundColor: "#e0e0de",
        borderRadius: 5,
        'margin-top':5,
        display:'flex',
    }

    const fillerStyle = {
        height: '100%',
        width: `${percentage}%`,
        backgroundColor: `${bgColor}`,
        textAlign: 'right',
        borderRadius: 50,
        transition: 'width 1s ease-in-out',
      }

      const labelStyle = {
        position:'absolute',
        top:'1vh',
        left:'-3vw',
        color: 'black',
        fontWeight: 'bold',
        'z-index':-1,
        width:'10vw',
        
      }

      const taskContentStyle={
        position:'absolute',
        display:'flex',
        right:'50%',
        top:'10%',
        textAlign:'right',

        'font-weight':'bold',
      }
      const iconsListStyle={
        position:'absolute',
        top:'0.5vh',
        display:'flex',
        left:'1vw',
        'padding-left':'7.5vw',
        textAlign: 'right'
      }
      const taskNameStyle={
          position:'absolute',
          top:'1vh',
          color:'black',
          right:'1.9vw',
          'text-align':'left',
          width:'11vw',
          'margin-left':'10%',
      }
      

    return(
        <Tooltip title={taskName.toUpperCase()} placement="right-start" arrow>
        <div className='taskMainContainer' style={containerStyle}>
            <div className='contentContainer' style={fillerStyle}>
               
            </div>
            <div className='taskContent' style={taskContentStyle}>
                <span style={labelStyle}>{`${time[0]+''+time[1]+':'+time[2]+''+time[3]+':'+time[4]+''+time[5]}  -  ${percentage}%`}</span>
                <div className='taskName' style={taskNameStyle}>
                    {`${taskName.toUpperCase().slice(0,14)}${taskName.length>14?'...':''}`}
                </div>
                {completed?'':
            
                
                <div className='iconsList' style={iconsListStyle}>
                    {paused
                        ?
                            <Tooltip title={`Start ${taskName.toUpperCase()}`}  arrow>
                                <div className='playButton'>
                                    <PlayCircleOutlineIcon key={`${taskName}-playBtn`} onClick={()=>dispatch(startTask(taskName))}/>
                                </div>
                            </Tooltip>
                        :
                            <Tooltip title={`Pause ${taskName.toUpperCase()}`}  arrow>
                                <div className='playButton'>
                                    <PauseCircleOutlineIcon key={`${taskName}-pauseBtn`} onClick={()=>dispatch(pauseTask(taskName))}/>
                                </div>
                            </Tooltip>
                    }
                    
                    {type?'':
                        <Tooltip title={`Mark Complete ${taskName.toUpperCase()}`}  arrow>
                            <div className='completedButton'>
                                <DoneOutlineIcon onClick={()=>dispatch(completeTask(taskName))}/>
                            </div>
                        </Tooltip>
                    }
                    {type?'':percentage>0?'':
                        <Tooltip title={`Remove ${taskName.toUpperCase()}`}  arrow>
                            <div className='removeButton'>
                                <CancelIcon key={`${taskName}-cancelBtn`} onClick={()=>dispatch(removeTask(taskName))}/>
                            </div>
                        </Tooltip>
                    }
                    
                     
                </div>
                }
            </div>
        </div>
        </Tooltip>
    )
}

export default AddedTask;