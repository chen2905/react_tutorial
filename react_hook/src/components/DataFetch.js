import React,{useState,useEffect} from 'react'
import axios from 'axios'
function DataFetch() {
    const [loading,setLoading]=useState(true)
    const [error, setError] =useState ('')
    const [post, setPost] =useState ({})
    const loaddata=()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/posts/29s')
        .then(
            res=>{
                setLoading(false)
                setError('')
                setPost(res.data)
            }
        )
        .catch(
            ()=>{
                setLoading(false)
                setError('something is wrong')
                setPost({})
            }
        )
    }
    useEffect(()=>{
        console.log("you should see this message once only")
        setInterval(loaddata, 2000)
    
     }  
     ,[] 
    )
    return (


        <div>
            {loading?'loading....':post.title}
            {error?error:null}
        </div>
    )
}

export default DataFetch
