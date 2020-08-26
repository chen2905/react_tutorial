import {BUY_CAKE} from './cakeTypes'

export const buyCake=(numberOfCakebuy=1) =>{
    return {
        type:BUY_CAKE,
        payLoad:numberOfCakebuy
    }
}