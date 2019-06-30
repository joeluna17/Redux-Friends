import React from 'react';
import Friend from './Friend';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import Loader from 'react-loader-spinner';
// need to get actions to pass into the connect function


class FriendsList extends React.Component{

  componentDidMount(){
        //need to make an action call to get friends onload and then set the state here in FriendsList Comp
        this.props.fetchData()
  }

  render(){
            //console.log("this is the state local to FreindsList", this.state)
            if(this.props.isFetching) {
                console.log("is fetching data now!")
                return (<Loader 
                    type="Puff"
                    color="#00BFFF"
                    height="100"	
                    width="100"
                    />)
            }
            // we need to load a error statment if we produce one here 
            else{
                return (
                   <div>
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


export default connect(mapStateToProps,{ fetchData } )(FriendsList);