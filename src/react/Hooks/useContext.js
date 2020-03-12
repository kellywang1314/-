// 定义共享区域，用于多组件通信
import React, { useContext,useState } from 'react'

const Context = React.createContext(null)
const UseContext = () => {
    
    const [count,setCount] = useState(0)
    return (
        <Context.Provider value={[count,setCount]}>
            <div>
                <h2>useContext</h2>
                <Child1 />
                <Child2 />
            </div>
        </Context.Provider>
    )
}

const Child1 = () => {
    const [count,setCount] = useContext(Context)
    return (
        <div>1------{count}
            <div onClick={() => setCount(count+1)}>+1</div>
        </div>
    )
}

const Child2 = () => {
    const [count,setCount] = useContext(Context )
    return (
        <div>2------{count}</div>
    )
}

export default UseContext