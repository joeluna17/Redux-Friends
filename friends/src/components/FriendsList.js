import React from 'react';
import Friend from './Friend';



const FriendsList = props => {

        console.log(props)  //DELETE ME

    return( 
            <>
                {
                props.friends.map(friend=>{
                    return <Friend friend={friend} key= {friend.id} />
                    })       
                }
            </>
            )
}


export default FriendsList;