import React, { Component } from 'react'
import axios from 'axios'
 class PostList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              posts:[],
              errorMessage:''
         }
     }
     componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                console.log(res)
                this.setState(
                {posts:res.data}
            )}
            )
            .catch(
                error=>{
                    console.log(`this is error:${error}`)
                    this.setState(
                        {
                            errorMessage:error.message
                        }
                    )
                }
            )
            }
    

    render() {
        const { posts,errorMessage }=this.state
        return (
            <div>
                List of Post:
               {
                   posts.length?
               posts.map(post=><div key={post.id}>{post.title}</div>):null
               }
               {errorMessage}
            </div>
        )
    }
}

export default PostList
