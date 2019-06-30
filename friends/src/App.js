import React from 'react';
import LoginForm from './components/LogInForm';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import { Route, Link } from 'react-router-dom';  

import './App.css';

class App extends React.Component {

   


  componentDidMount(){

  }


  render(){ 
            return (
            <div className="App">
              <Link to="/login">Login</Link>
              <Link to= "/protected">Friends</Link>
              <h1>Welcome to your Friends</h1>
              <Route path="/login" component={LoginForm} />
              <PrivateRoute exact path="/protected" component={FriendsList} />
            </div>

        )
        
    }
      
}


export default App;
