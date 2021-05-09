import React from 'react';
import './Header.style.scss';


const Header=()=>{
    
    return(
        <nav className='headerContainer'>
           
                <div className='logoContainer'>
                    <div className='logo'>
                        TimeKeeper
                    </div>
                </div>
            

           
            <div className='optionContainer'>
                    <div className='option'>
                        SignIn
                    </div>
                
                              
            </div>
        </nav>
    );
}

export default Header;