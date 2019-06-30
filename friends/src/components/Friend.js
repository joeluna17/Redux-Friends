import React from 'react';




const Friend = props =>{

    //console.log(props, "just here in the friends component") //DELETE ME

    return(
        <div className="friend-wrapper">
            <h2>{props.friend.name}</h2>
            <h3>{props.friend.age}</h3>
            <h3>{props.friend.email}</h3>
        </div>
    )
}

export default Friend