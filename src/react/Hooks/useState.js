
import React,{useState} from 'react'
/* useState 用法比较简单，
但是有一点需要注意就是useState的初始值只能设置一次，
重复设置不会生效，注意这里name的值不会变化 */
const UseState = () =>{
    const [count,setCount] = useState(0)
    return(
        <div>
            <h2>useState </h2>
            <div>{count}</div>
            <button onClick={() => {setCount(count+1)}}>+</button>
            <Child data={count}/>
        </div>
    )
}

const Child = ({data}) => {
    console.log(data,'wawa')
    const [name,setName] = useState(data)
    return (
        <div>{name}</div>
    )
}
export default UseState
