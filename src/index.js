import React from 'react'
import { render } from 'react-dom'
import FileUpload from './upload/client/Upload'
import { UseState, UseEffect, UseRef, UseCallBack, UseContext } from './react/Hooks/index'
render(<div>
    <UseState/>
    <div>-----</div>
    <UseEffect />
    <div>-----</div>
    <UseRef />
    <div>-----</div>
    <UseCallBack />
    <div>-----</div>
    <UseContext/>
    <div>-----</div>
</div>,document.getElementById('root'))


function QuickSort(arr = []) {
    if(arr.length<=1) return arr
    let posIndex = Math.floor(arr.length / 2)
    let posValue = arr.splice(posIndex,1)[0]
    let low = [], high = []
    for(let i=0; i<arr.length; i++){
        if(arr[i]<posValue){
            low.push(arr[i])
        }else{
            high.push(arr[i])
        }
    }
    return [...QuickSort(low),posValue,...QuickSort(high)]
}

function SelectSort(arr =[]) {
    let len = arr.length
    let minIndex,minValue
    for(let i=0; i<len; i++){
        minIndex = i
        minValue = arr[i]
        for(let j=i+1;j<len;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        arr[i] = arr[minIndex]
        arr[minIndex] = minValue
    }
    return arr
}

function InsertSort(arr = []) {
    let len = arr.length,temp
    for(let i=0; i<len-1; i++){
        for(let j=i; j>=0; j--){
            if(arr[j+1]>arr[j]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}


function Tottle(fn,timeout){
    let timer = null
    return () => {
        if(!timer){
            timer = setTimeout(() => {fn();timer=null},timeout)
        }
        
    }

}

function Debouce(fn,timeout) {
    let timer = null 
    return () => {
        if(timer){
            clearTimeout(timer)
        }else{
            timer = setTimeout(() => {fn()},timeout)
        }
        
    }
}

function fn() {
    console.log('wawawa')
}

window.addEventListener('resize',Debouce(fn,1000))

function clone(obj) {
    if(typeof obj !== 'object') return obj
    let newObj = {}
    for(let i in obj){
        newObj[i] = obj[i]
    }
    return newObj
}

function deepClone(obj,hash=new Map()){
    if(hash.has(obj)) return hash.get(obj)
    let newObj = Array.isArray(obj) ? [] : {}
    hash.set(obj,newObj)
    for(let i in obj){
        if(typeof obj[i] === 'object'){
            newObj[i] = deepClone(obj[i],hash)
        }else{
            newObj[i] = obj[i]
        }
    }
    return newObj
}





