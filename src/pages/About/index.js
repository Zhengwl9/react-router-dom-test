import React,{useState} from 'react'
import {Button} from 'antd'
export default function HookCount() {
    const [count,addCount,minusCount] = CountNumber(0);

    return (
        <div style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <p>You clicked {count} times</p>
            <Button onClick={addCount} >add</Button>
            <Button onClick={minusCount}>minus</Button>
        </div>
    );
}

function CountNumber(initNumber) {
    const [count, setCount] = useState(initNumber);
    const addCount=()=> setCount(count + 1);
    const minusCount=()=>setCount(count -1);
    return [
        count,
        addCount,
        minusCount
    ]
}

