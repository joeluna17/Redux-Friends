import React from 'react';
import LoginForm from './components/LogInForm';
import FriendsList from './components/FriendsList';
import { Route, Link } from 'react-router-dom';  

import './App.css';

class App extends React.Component {

       state = {
        friends:[
          {
          id: 1,
          name: 'Joe',
          age: 24,
          email: 'joe@lambdaschool.com',
          }
        ]
  }

  render(){ 
            return (
            <div className="App">
            <Link to="/" > Home</Link>
              <h1>Welcome to your Friends</h1>
              <LoginForm />

              <Route exact path="/" render={props=><FriendsList {...props} friends={this.state.friends}/>}/>
            </div>

            
        )
        
    }
      
}


export default App;
