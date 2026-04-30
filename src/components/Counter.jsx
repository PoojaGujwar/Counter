import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const [timer,setTimer] = useState(0);
    const [status, setStatus] = useState(false)

    useEffect(()=>{
      let interval
      if(status === true){
        interval = setInterval(()=>{
          setTimer((pre)=>pre+1);
        },1000)
      }
      return()=>{
        clearInterval(interval)
      }
    },[status])
   
  return (
    <div className='m-5 text-center'>
      <div>
        <h3>Count : {count}</h3>
      <button onClick={(e)=>setCount(count+1)} className='btn btn-primary'>Increment</button>
      <button onClick={(e)=>setCount(count-1)} className='btn btn-secondary'>Decrement</button>
      </div>
      <div>
        <h3>Timer: {timer}</h3>
        <button onClick={()=>setStatus(true)}>Start</button>
        <button onClick={()=>setStatus(false)}>Stop</button>
        <button onClick={()=>{
          setStatus(false)
          setTimer(0)
        }}>Reset</button>
      </div>
    </div>
  )
}
