import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CallIcon from '@material-ui/icons/Call';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import EjectIcon from '@material-ui/icons/Eject';
import Tootip from '@material-ui/core/Tooltip'
import './BreakButtons.style.scss';
import Tooltip from '@material-ui/core/Tooltip';

const BreakButtons=()=>{
    return(
        <div className='breakbuttonsMainContainer'>
            <Tooltip title='Instagram'>
                <button className='brakButton-insta'><InstagramIcon style={{fill: "white"}} fontSize="large"/></button>
            </Tooltip>
            <Tooltip title='Facebook'>
                <button className='brakButton-fb'><FacebookIcon style={{fill: "white"}} fontSize="large"/></button>
            </Tooltip>
            
            <Tooltip title='Youtube'>
                <button className='brakButton-youtube'><YouTubeIcon style={{fill: "white"}} fontSize="large"/></button>
            </Tooltip>
           
            <Tooltip title='Calls'>
                <button className='brakButton-calls-'><CallIcon style={{fill: "white"}} fontSize="large"/></button>
            </Tooltip>
            
            <Tooltip title='Messaging'>
                <button className='brakButton-messaging'><WhatsAppIcon style={{fill: "white"}} fontSize="large"/></button>
            </Tooltip>
            

            <Tooltip title='Sleep'>
                <button className='brakButton-sleep'><AirlineSeatFlatIcon style={{fill: "white"}} fontSize="large"/></button>
            </Tooltip>
            
            <Tooltip title='Excercise'>
                <button className='brakButton-excesiseclicked'><DirectionsRunIcon style={{fill: "white"}} fontSize="large"/></button>
            </Tooltip>
           
            
            <Tooltip title='Food'>
                <button className='brakButton-tea'><FreeBreakfastIcon style={{fill: "white"}} fontSize="large"/></button>
            </Tooltip>
            
            
            <Tooltip title='Tea/Coffee'>
                <button className='brakButton-food'><FastfoodIcon style={{fill: "white"}} fontSize="large"/></button>
            </Tooltip>
           
            
            <Tooltip title='Release All'>
                 <button className='brakButton-eject'><EjectIcon style={{fill: "white"}} fontSize="large"/></button>
            </Tooltip>
            
            
        </div>
        )
}

export default BreakButtons;