
import React,{useState,useCallback} from 'react'
/*  
*  UseCallBack对函数进行缓存，因为点击+1时候，父组件刷新，
   那，onChange会重新生成，导致传递到child中的onChange发生改变
   child也会渲染，但是其实child没有任何改变，不需要渲染，此时添加
   useCallback能对函数进行缓存,需要配合React.memo使用，useCallback的[]如果有字段，
   表示如果此字段更新，那会重新生成一个新的函数，onChange会变化，child会重新渲染

   React.memo 会返回了一个纯组件,我们将在 JSX 标记中渲染此组件。 
   每当组件中的 props 和 state 发生变化时，
   React 将检查 上一个 state 和 props 以及下一个 props 和 state 是否相等(浅比较)，
   如果不相等则函数组件将重新渲染，如果它们相等则函数组件将不会重新渲染。

   useMemo使用方法和useCallback是一样的，只是useMemo缓存的是变量，useCallback缓存的是函数
*
*/
const UseCallBack = () =>{
    console.log('render...')
    const [count,setCount] = useState(0)
    const [name,setName] = useState('wa')
    const [info,setInfo] = useState('')
    const onChange = useCallback(() => {
        setInfo('lalalal')
    },[])
    return(
        <div>
            <h2>UseCallBack  </h2>
            <div>{count}</div>
            <button onClick={() => {setCount(count+1)}}>+</button>
            <Child data={name} onChange={onChange}/>
        </div>
    )
}

const Child = React.memo(({data,onChange}) => {
    console.log('child render...')
    return (
        <div>{data}</div>
    )
})
export default UseCallBack
