




const defaultState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
}


export const rootReducer = (state = defaultState, action) => {
    switch (action.type){

        default: 
            return state;
    }
}