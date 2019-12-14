import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Auth from './Components/Auth';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(user) {
    this.setState({
      user,
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <div>
        
          <Auth user={user} />
        </div>
        <div>
          {/* <Dashboard getAllFn={this.getAll} inventory={inventory} /> */}
        </div>
      </div>
    );
  }
}

export default App;
