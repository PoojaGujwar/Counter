import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div className='m-5 text-center'>
        <h3>Count : {count}</h3>
      <button onClick={(e)=>setCount(count+1)} className='btn btn-primary'>Increment</button>
      <button onClick={(e)=>setCount(count-1)} className='btn btn-secondary'>Decrement</button>
    </div>
  )
}
