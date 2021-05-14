import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import CancelIcon from '@material-ui/icons/Cancel';
const AddedTask=({completed,bgColor})=>{

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
        width: `${completed}%`,
        backgroundColor: `${bgColor}`,
        borderRadius: 'inherit',
        textAlign: 'right',
        borderRadius: 50,
        transition: 'width 1s ease-in-out',
      }

      const labelStyle = {
        position:'absolute',
        left:'4vw',
        color: 'black',
        fontWeight: 'bold',
        'z-index':-1,
        
      }

      const taskContentStyle={
        position:'absolute',
        display:'flex',
        right:'50%',
        top:'10%',
        textAlign:'right',
      }
      const iconsListStyle={
        position:'absolute',
        display:'flex',
        'padding-left':'7vw'
      }
      const taskNameStyle={
          position:'absolute',
          color:'black',
          right:'1.9vw',
      }
      

    return(
        <div className='taskMainContainer' style={containerStyle}>
            <div className='contentContainer' style={fillerStyle}>
               
            </div>
            <div className='taskContent' style={taskContentStyle}>
                <span style={labelStyle}>{`${completed}%`}</span>
                <div className='taskName' style={taskNameStyle}>
                    DemoName12345678
                </div>
                <div className='iconsList' style={iconsListStyle}>
                    <div className='playButton'>
                        <PlayCircleOutlineIcon/>
                    </div>
                    <div className='playButton'>
                        <PauseCircleOutlineIcon/>
                    </div>
                    <div className='completedButton'>
                        <DoneOutlineIcon/>
                    </div>
                    <div className='removeButton'>
                        <CancelIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddedTask;