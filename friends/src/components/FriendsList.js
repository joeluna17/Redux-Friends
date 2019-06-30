import React from 'react';
import Friend from './Friend';
import { connect } from 'react-redux';
import { fetchData , addFriend} from '../actions';
import Loader from 'react-loader-spinner';
// need to get actions to pass into the connect function


class FriendsList extends React.Component{
    state = {
        
        name: '',
        age:'',
        email:''
    }

  componentDidMount(){
        this.props.fetchData()
  }

  onChangeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
  }

addFriend = (e) =>{
        e.preventDefault();
        console.log('attemped to add friend')
        const newFriend = {
            
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        this.props.addFriend(newFriend);

        this.setState({
            name: '',
            age:'',
            email:''
        })
  }

  render(){
           
            if(this.props.isFetching) {
                console.log("is fetching data now!")
                return (<Loader 
                    type="Puff"
                    color="#00BFFF"
                    height="100"	
                    width="100"
                    />)
            }
            
            else{
                return (
                   <div>
                   <div className="add-friend-form-wrapper">
                    <form onSubmit={(e)=>{this.addFriend(e)}}>
                        < input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.onChangeHandler}
                            />
                            
                            < input
                            type="text"
                            name="age"
                            placeholder="Age"
                            value={this.state.age}
                            onChange={this.onChangeHandler}
                            />

                            < input
                            type="text"
                            name="email"
                            placeholder="Email Address"
                            value={this.state.email}
                            onChange={this.onChangeHandler}
                                />
                                <button type="submit">Add Friend</button>
                            </form>
                        </div>
        
                   {
                   this.props.friends.map(friend=>{
                       return <Friend friend={friend} key= {friend.id} />
                       })       
                   }
                   </div>
                   )
               }     
                     
        }
    
}

const mapStateToProps = state => {
        console.log(state, "this is state in the MSTP in FriendsList")
        return {
            friends: state.friends,
            isFetching: state.fetchingFriends,
            error: state.error
        }
}


export default connect(mapStateToProps,{ fetchData, addFriend } )(FriendsList);