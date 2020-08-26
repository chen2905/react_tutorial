import React,{useState} from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'
function NewCakeContainer(props) {
   const [numberOfCakeBuy, setNumberOfCakeBuy]=useState(1)
    return (
        <div>
            <h1>Number of cakes {props.numberOfCake}</h1>
    Buy number of Cake: <input type='text' onChange={(e)=>setNumberOfCakeBuy(e.target.value)}></input>
            <button onClick={()=>props.buyCake(numberOfCakeBuy)}>Buy {numberOfCakeBuy} Cake</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        numberOfCake: state.cake.numberOfCake
    } 
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake:(numberOfCakeBuy)=>dispatch(buyCake(numberOfCakeBuy))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(NewCakeContainer)
