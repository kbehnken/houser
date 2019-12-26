import React from 'react';

export default function Auth(props) {
    const { username, password, handleUsernameInputFn, handlePasswordInputFn, loginFn, registerFn } = props;
    return (
        <div className='auth-container'>
            <div>
                <img src='/assets/auth_logo.png' alt='houser logo' />
            </div>
            <div>
                <label>Username</label>
            </div>
            <div>
                <input type='text' value={username} onChange={e => handleUsernameInputFn(e.target.value)}></input>
            </div>
            <div>
                <label>Password</label>
            </div>
            <div>
                <input type='password' value={password} onChange={e => handlePasswordInputFn(e.target.value)}></input>
            </div>
            <div>
                    <button className='light-green-button' onClick={loginFn}>
                        Log In
                    </button>
                <button className='dark-green-button' onClick={registerFn}>
                    Register
                </button>
            </div>
        </div>
    )
}