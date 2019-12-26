import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Auth from './Components/Auth';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      username: '',
      password: ''
    };
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

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
  updateUser(user) {
    this.setState({
      user,
    });
  }
  login() {
    const { username, password } = this.state;
    axios
    .post('api/auth/login', {username, password})
    .then(user => {
      this.updateUser(user.data);
    }) 
    .catch(err => alert(err.response.request.response));
  }
  register() {
    const { username, password } = this.state;
    axios
    .post('api/auth/register', {username, password})
    .then(user => {
      this.setState( {
        username: '',
        password: ''
      });
      this.updateUser(user.data);
    })
    .catch(err => {
      this.setState( {
        username: '',
        password: ''
      });
      alert(err.response.request.response)
    });
  }
  logout() {
    axios
    .post('api/auth/logout')
    .then(() => {
        this.updateUser({});
    })
    .catch(err => console.log(err));
  }

  render() {
    const { user, username, password } = this.state;
    return (
      <div>
        {user.username ?
          (
            <div>
              <header className="App-header">
              <Header logoutFn={this.logout} />
              </header>
              <Dashboard />
            </div>
          ) :
          (
            <div className='main-container'>
              <div>
                <main>
                  <Auth user={user} username={username} password={password} handleUsernameInputFn={this.handleUsernameInput} handlePasswordInputFn={this.handlePasswordInput} updateUserFn={this.updateUser} registerFn={this.register} loginFn={this.login} />
                </main>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
