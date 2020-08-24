//console.log('Hello God! Thank you so much, I am studying the redux, please bless me so I can fully learn it! Thank you again!')

//define the action object
const redux = require('redux')
const combineReducers = redux.combineReducers
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'redux demo'
    }
}
function buyIceCream() {
    return {
        type: BUY_ICE_CREAM,

    }
}

const CakeInitialState = {
    CakeCount: 10
}
const IceCreamInitialState = {

    IceCreamCount: 20
}



//(previousState,action)=>newState
const reducerCake = (state = CakeInitialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                CakeCount: state.CakeCount - 1
            }
       
        default: return state

    }
}
const reducerIceCream = (state = IceCreamInitialState, action) => {
    switch (action.type) {
      
        case BUY_ICE_CREAM:
            return {
                ...state,
                IceCreamCount: state.IceCreamCount - 1
            }
        default: return state

    }
}


const rootReducer =combineReducers({
    cakeState:reducerCake,
    iceCreamState:reducerIceCream
})

const store = createStore(rootReducer)

console.log('initial state:',store.getState())

const unsubscribe = store.subscribe(() => console.log('updated state:',store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
