import React, { Component } from 'react';
import axios from 'axios';

export default class Auth extends Component {
    constructor() {
        super();
        this.state = {
          username: '',
          password: ''
        }
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    };

    handleUsernameInput(value) {
        this.setState( { 
            username: value
        });
    }
    handlePasswordInput(value) {
        this.setState( {
            password: value
        });
    }
    login() {
        // axios POST to /auth/login here
        const { username, password } = this.state;
        axios
        .post('api/auth/login', {username, password})
        .then(user => {
          this.props.updateUser(user.data);
          this.setState({
            username: '',
            password: ''
          })
        })
        .catch(err => alert(err.response.request.response));
    }
    register() {
        const { username, password } = this.state;
        axios
        .post('api/auth/register', {username, password})
        .then(user => {
          this.setState( {
            password: ''
          });
          this.props.updateUser(user.data);
        })
        .catch(err => {
          this.setState({ username: '', password: '' })
          alert(err.response.request.response)
        });
    }
    logout() {
        axios
        .get('api/auth/logout')
        .then(() => {
            this.props.updateUser({});
        })
        .catch(err => console.log(err));
    }
    render() {
        const { username, password } = this.state;
        return (
            <div className='auth-container'>
                <div>
                    <img src='/assets/auth_logo.png' alt='houser logo' />
                </div>
                <div>
                    <label>Username</label>
                </div>
                <div>
                    <input type='text' value={username} onChange={e => this.handleUsernameInput(e.target.value)}></input>
                </div>
                <div>
                    <label>Password</label>
                </div>
                <div>
                    <input type='password' value={password} onChange={e => this.handlePasswordInput(e.target.value)}></input>
                </div>
                <div>
                    <button onClick={this.login}>
                        Log In
                    </button>
                    <button onClick={this.register}>
                        Register
                    </button>
                </div>
            </div>
        )
    }
}