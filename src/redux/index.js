import React,{ useState,useEffect,Component } from 'react'
import { createStore, combineReducers } from 'redux'
import { initState, reducer } from './initState'
const store = createStore(reducer)
const ReduxTest = () => {
    const [ counter, setcounter ] = useState(0)
    const handleClick = (type) => {
        store.dispatch({type:type})
    }
    store.subscribe(
        () => {
            setcounter(store.getState())
        }
    )
    return (
        <div>
            <div onClick={() => handleClick('add')}>加1</div>
            <div>{counter}</div>
            <div onClick={() => handleClick('less')}>减1</div>
        </div>
    )
}
export default ReduxTest


// const createStore = (action,initState = {}) => {
//   let currentState = initState
//   let listeners = []
//   function getState(){
//     return currentState
//   }
//   function dispatch(action){
//     currentState = action(preState,actioncreateData)
//     listeners.forEach(fn => fn())
//   }
//   function subscribe(fn){
//     listeners.push(fn)
//   }
//   return {getState,dispatch,subscribe}
// }
