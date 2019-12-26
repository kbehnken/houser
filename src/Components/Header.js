import React from 'react';

export default function Header(props) {
    return (
        <div className='header-container'>
            <div>
                <img src='/assets/header_logo.png' width='25px' alt='houser logo' />
                Houser Dashboard
            </div>
            <div className='logout' onClick={props.logoutFn}>
                Logout
            </div>
        </div>
    ); 
}