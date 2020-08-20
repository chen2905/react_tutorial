import React,{useState,useEffect} from 'react'
import axios from 'axios'

function UseEffectFetchSingleData() {
   
    const [post, setPost] =useState({})
    const [postID,setPostID] = useState(1)
    const [IDFromBtnClick, setIDFromBtnClick] =useState(postID)
    const handleButtonClick=()=>{
        setIDFromBtnClick(postID)
    }
    useEffect(()=>{
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${IDFromBtnClick}`)
             .then(res=>{
                 console.log(res.data)
                 setPost(res.data)
             })
             .catch(error=>console.log(error.message))

    },[IDFromBtnClick])

    return (
        <div>
            hello, God!
            <input type='text' onChange={(e)=>setPostID(e.target.value)}/>
            <button onClick={handleButtonClick}>Click to load the post</button>

            <ul>
            <li key={post.id}>{post.title}</li>   
            </ul>
        </div>
    )
}


export default UseEffectFetchSingleData
