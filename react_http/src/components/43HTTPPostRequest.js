import React, { Component } from 'react'
import axios from 'axios'
export class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            postReturn:[],
            errorMessage:''
           
        }
    }
    SubmitHandler =(e) =>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"

          })
          .then(res=>{
            console.log(res.data)
            this.setState((pre)=>(
                {
                    postReturn:res.data
                }
            )
          
        )
            console.log(`this is state post ${this.state.postReturn}`)
        }
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
        const { postReturn,errorMessage }=this.state
        return (
           
            <div>
                <form onSubmit={this.SubmitHandler}>
                    <button type="submit">Submit</button>
               
                </form>
                 {
             this.state.postReturn[0] && this.state.postReturn[0].title
               }
           
               {errorMessage}
            </div>
        )
    }
}

export default PostForm
