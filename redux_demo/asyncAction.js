//console.log('Hello God! Thank you so much, I am studying the redux, please bless me so I can fully learn it! Thank you again!')

//define the action object
const redux = require('redux')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const thunkMiddleware = require('redux-thunk').default
const axios =require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const FETCH_USER_DATA='FETCH_USER_DATA'
const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS'
const FETCH_USER_DATA_FAILED = 'FETCH_USER_DATA_FAILED'

const fetchUserData=()=>{
    return {
        type:FETCH_USER_DATA
    }
}

const fetchUserDataSuccess=(Users)=>{
    return {
        type:FETCH_USER_DATA_SUCCESS,
        payLoad:Users
    }
}

const fetchUserDataFailed=(Error)=>{
    return {
        type:FETCH_USER_DATA_FAILED,
        payLoad:Error
    }
}
const InitialState = {
    loading: true,
    users: [],
    error: ''
}



//(previousState,action)=>newState
const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case FETCH_USER_DATA:
            return {
                ...state,
                loading:true
            }
        case FETCH_USER_DATA_SUCCESS:
            return {
                ...state,
                loading:false,
                users: action.payLoad
            }
        case FETCH_USER_DATA_FAILED:
            return {
                ...state,
                loading:false,
                error: action.payLoad
            }
        default: return state

    }
}

const fetchData =()=>{

   return function(dispatch){
        dispatch(fetchUserData())
        axios.get('https://jsonplaceholder.typicode.com/usesrs')
        .then( response=>{
            const users = response.data.map(user=>user.name)
            dispatch(fetchUserDataSuccess(users))
        }
          
        )
        .catch(error=>{

            dispatch(fetchUserDataFailed(error.message))
        })
    }
}



const store = createStore(reducer, applyMiddleware(thunkMiddleware))

//console.log('initial state:',store.getState())

const unsubscribe = store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchData())

unsubscribe()
 