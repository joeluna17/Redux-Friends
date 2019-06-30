import { FETCHING_FRIENDS_DATA , FETCH_SUCCESSFUL, FETCH_ERROR ,  SAVING_FRIEND_DATA, SAVE_FREIND_SUCCSSESFUL } from '../actions'




const defaultState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [

        {
            id: 1,
            name: 'NO INFO',
            age: 'NO INFO',
            email: 'NO INFO',
          }
    ],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: ''
}


export const rootReducer = (state = defaultState, action) => {
    switch (action.type){

        case FETCHING_FRIENDS_DATA: 
            return {
                    ...state,
                    fetchingFriends: true
            }

        case FETCH_SUCCESSFUL:
            return {
                ...state, 
                fetchingFriends: false,
                friends: action.payload,
                error: ''
            }

        case FETCH_ERROR:
            return {
                ...state,
                fetchingFriends:false,
                error: action.payload
            }

        case SAVING_FRIEND_DATA:
            return {
                ...state,
                savingFriends: true,
                error: ''
            }

        case SAVE_FREIND_SUCCSSESFUL:
            return {
                ...state,
                savingFriends:false,
                friends: action.payload
            }

        default: 
            return state;
    }
}