import axios from 'axios';


export const FETCHING_FRIENDS_DATA = "FETCHING_FRIENDS_DATA";
export const FETCH_SUCCESSFUL = "FETCH_SUCCESSFUL";
export const FETCH_ERROR = "FETCH_ERROR";
export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCESSFUL = "LOG_IN_SUCCESSFUL";
export const SAVING_FRIEND_DATA = "SAVING_FRIEND_DATA";

//action above


//action creators below

export const fetchData = () => dispatch =>{
        dispatch({type: FETCHING_FRIENDS_DATA})
        axios.get('http://localhost:5000/api/friends', {
            headers: { Authorization: localStorage.getItem("userToken") }
        })
        .then(res => {
            console.log(res.data)
            dispatch({
                type:FETCH_SUCCESSFUL,
                payload: res.data
            })
        })
        .catch(err => {
            if (err.response === 403){
                localStorage.removeItem("userToken")
            }
            dispatch({type: FETCH_ERROR, payload: err.response})
        })

}


export const login = creds => dispatch => {
    dispatch({type:LOG_IN})

  return axios.post('http://localhost:5000/api/login',creds)
    .then(res => {
        dispatch({
            type:LOG_IN_SUCCESSFUL,
            payload: res.data.payload
        })
    })
    .catch(err=>{
        alert(err)
     })
}
