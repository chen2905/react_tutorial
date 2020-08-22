import React,{useReducer,useEffect} from 'react'
import axios from 'axios'
function DataFetchUseReducer() {
    const initialState ={
        loading:true,
        post:{},
        error:''
    }
    const reducer=(state,action)=>{
        switch(action.type){
            case 'fetch_success':
             return{
                    loading:false,
                    post :action.payload,
                    error:''
                }
            
            case 'error':
                return{
                    loading:false,
                    post :{},
                    error:action.payload,
                }
             default:
                 return state

        }
    }
    const loaddata=()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/posts/29')
        .then(
            res=>{
                dispatch({type:'fetch_success',payload:res.data})
            }
        )
        .catch(
            ()=>{
                dispatch({type:'error',payload:'someting wrong'})
            }
        )
    }
    const [state,dispatch] =useReducer(reducer,initialState)
    useEffect(()=>{
        setInterval(loaddata,2000)
    },[])
    return (
        <div>
            {state.loading?'loading...':state.post.title}
            {state.error?state.error:null}
        </div>
    )
}

export default DataFetchUseReducer
