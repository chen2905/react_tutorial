import {FETCH_USER_REQUEST,FETCH_USER_SUCESS,FETCH_USER_FAIL} from './userTypes'
import axios from 'axios'

export const fetchUserRequest =() =>{
    return {
        type:FETCH_USER_REQUEST
    }

}

export const fetchUserSuccess=(user)=>{
    return {
        type:FETCH_USER_SUCESS,
        payload:user
    }
}




export const fetchUserFail=(error)=>{
    return {
        type:FETCH_USER_FAIL,
        payload:error
    }
}

export const fetchUsers =() =>{
return(

    (dispatch)=>{
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const usersData=res.data

           dispatch(fetchUserSuccess(usersData))
        })
        .catch(error=>{
           dispatch(fetchUserFail(error.message))
        })
    }
)
}