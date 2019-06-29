import React from 'react';
import { connect } from 'react-redux';


class LoginForm extends React.Component {

    constructor(){
        super();
       this.state = {
            username:"",
            password:""

        }
    }

    componentDidMount(){

    }

    updateChangeHandler = (e) => {
        
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )

    }

    login = (e) =>{
        e.preventDefault()
        console.log('just tried to login')

        this.setState({
            username:"",
            password:"",
            loggingIn: false
        })
    }

    render(){

        return(

            <div> 
                <form onSubmit= {(e)=>{this.login(e)}}>
                    <input 
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value={this.state.username}
                        onChange={this.updateChangeHandler}
                        
                    />

                    <input 
                        type="text"
                        name="password"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.updateChangeHandler}
                    />

                    <button type="submit">Login</button>

                </form>
            </div>

        )

    }

}

const mapSateToProps = state => {
            return {
                
            }
}

export default connect(mapSateToProps,{})(LoginForm)
