import {useState} from 'react'

function useCounter(initalCount=0,value) {
  const [count, setCount] =useState(initalCount)
  const increament =()=>setCount(preState=>preState+value)
  const decreament =()=>setCount(preState=>preState-value)
  const reset =()=>setCount(initalCount)
  return [count,increament,decreament,reset]
}

export default useCounter
