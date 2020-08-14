import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:'',
              comment:'',
              hero:'Chen'
         }
         this.inputHandler=this.inputHandler.bind(this)
         this.textAreaHandler =this.textAreaHandler.bind(this)
         this.selectHandler =this.selectHandler.bind(this)
         this.submitHandler = this.submitHandler.bind(this)
     }
     inputHandler(e){
    
         this.setState(
            {
                username:e.target.value
            }

         )
     }

     textAreaHandler(e){
    
        this.setState(
           {
               comment:e.target.value
           }

        )
    }

    selectHandler(e){
    
        this.setState(
           {
               hero:e.target.value
           }

        )
    }
    submitHandler(e){
        console.log('submitted')
        e.preventDefault()
        this.setState(
            {
                username:e.target.txtUserName.value,
                comment:e.target.txtComment.value,
                hero:e.target.selHero.value
            }
        )

    }

    render() {
        const {username,comment,hero}= this.state
        return (
            
          <form onSubmit={this.submitHandler}>
              <div>
                <input type='text' name='txtUserName' value={username} onChange={this.inputHandler}></input>
                <label>This is God's form input:{username}</label>
                </div>
                <div>
                    <label>Comment from God:                        
                    </label>
                    <textarea name='txtComment' onChange ={this.textAreaHandler} value={comment}></textarea>
                    you enterred: {comment}

                </div>
                <label>God's heros</label>
                <select onChange={this.selectHandler} defaultValue={hero} name='selHero'>
                    <option value="John">John</option>
                    <option value="Chen">Chen</option>
                    <option value="Bruce">Bruce</option>
                </select>
                The hero God's select is {hero}

                <br/>
                <br/>
                <input type="submit" value="Submit" ></input>
          </form>
        )
    }
}

export default Form
