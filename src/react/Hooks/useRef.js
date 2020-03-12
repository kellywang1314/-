import React,{ useEffect,useState,useRef } from 'react'

/* 
1. useRef可以替代ref，获取一个dom实例
2. useRef可以用来在整个生命周期保存一个状态
*/

const UseRef = () =>{
    const [count, setCount] = useState(0)
    const prevCountRef = useRef(count)
    const prevCount = prevCountRef.current
    const domRef = useRef(null)

    const changeEventHandler = (e) =>{
        // 获取到这个dom实例
        console.log(domRef)
    }
    useEffect(() =>{
        // 改变current不会出发渲染，
        prevCountRef.current = count
        console.log('useEffect:', prevCountRef)
    }, [count])
    
    return (
        <div>
            <button onClick={() => { setCount( count + 1 ) }}>加1</button>
            <p>count: {count}</p>
            <p>prevCount: {prevCount}</p>
            <input ref={domRef} style={{borderWidth:'1px', borderStyle:'solid', borderColor:'red'}} type='text' onChange={changeEventHandler}/>
        </div>
    )
}


export default UseRef
