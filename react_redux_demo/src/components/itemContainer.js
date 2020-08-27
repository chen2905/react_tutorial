import React from 'react'
import { connect } from 'react-redux'
import {buyCake,buyIceCream} from '../redux'
function ItemContainer(props) {
    return (
        <div>
            <h2>number of cake from item container-{props.numberOfItem}</h2>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const numberOfItem = props.cake
        ? state.cake.numberOfCake
        : state.iceCream.numberOfIceCream

    return {
        numberOfItem: numberOfItem
    }

}

const mapDispatchToProps =(dispatch,props)=>{
    const dispatchFunction = props.cake
    ?()=>dispatch(buyCake())
    : ()=>dispatch(buyIceCream() )
    return {
        buyItem:dispatchFunction
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)

