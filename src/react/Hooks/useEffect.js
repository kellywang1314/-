import React,{ useEffect,useState } from 'react'

/* 
1. useEffect最后加[],表示useEffect只执行一次
2. useEffect什么不加,表示useEffect每次渲染都执行 
3. useEffect最后加[]，并且[]里面加了字段，就表示这个字段更改了，effect才执行
4. 使用return () => {} 能取消订阅
5. useEffect里面使用到的state的值, 不会被改变，除非useEffect刷新（比如在[]添加count使其随着render不断执行），重新固定state的值
*/


const UseEffect = () =>{
    const [count,setCount] = useState(0)
    useEffect(() => {
        console.log('use effect1...',count)
        setCount(count + 1)
        console.log('use effect2...',count)
    },[])
    return(
        <div>
            <h2>useEffect</h2>
            <div>{count}</div>
            <button onClick={() => {setCount(count+1)}}>+</button>
        </div>
    )
}

export default UseEffect
