import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import App from '../App'
import { useState } from 'react';


const Hello = (props) => {
    // console.log(props);
    const { master, setMaster } = useContext(App.context)
    let num = master?.todos?.num;

    const test = useSelector((state) => { return state.test; });
    const selfNum = test.num;
    const dispatch = useDispatch();
    const [a, setA] = useState(0)

    return (
        <div>
            <p onClick={()=>{setA(a+1)}}>{a}</p>
            <p>hello</p>
            <p>来自master的store:{num} <button onClick={() => { setMaster({ type: 'ADD_TODO' }) }}>点击增加</button> </p>
            <p>自己的store:{selfNum} <button onClick={() => { dispatch({ type: 'ADD_TODO' }) }}>点击增加</button> </p>
        </div>
    )
}
export default Hello