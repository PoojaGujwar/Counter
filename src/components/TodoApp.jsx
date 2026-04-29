import React, { useState } from 'react'
import "../App.css"

export default function TodoApp() {
    const [todos,setTodos] = useState('');
    let [myTodo, setAllTodos] =useState([]);
    const [editIndext, setEditIndex] = useState(null);

const addHandler =(e)=>{
  e.preventDefault();
  
  if(todos ===''){
    alert("Please enter anything");
  }else 
    if(editIndext !== null){
    let updatedTodos = [...myTodo];
    updatedTodos[editIndext] =  todos;
    setAllTodos(updatedTodos);
    setEditIndex(null);
  }else{
    setAllTodos((pre)=>[...pre,todos]);
  }
  setTodos("")
}
const deleteHandler =(index)=>{
  setAllTodos(myTodo.filter((val,i)=>index !== i));
}
const updateHandler =(idx)=>{
setTodos(myTodo[idx])
setEditIndex(idx);
}
  return (
    <div className='container shadow m-5'>
      <h1 className='text-center pt-3 pb-2'>Todo App</h1>
      <form onSubmit={addHandler} className='form-control d-flex align-items-center'>
      <div className='flex-fill'>
        <input type='text' name="todo" placeholder='Enter your todo' onChange={(e)=>setTodos(e.target.value)} value={todos} className='border-0'
        />
        <button type='submit' className='btn btn-primary justify-end'>Add</button>
      </div>
      </form>
      <div className='m-5'>
        <ul className='list-group'>{myTodo && myTodo.map((val,index)=>(<li key={index} className='list-group-item'>{val}<button onClick={()=>deleteHandler(index)} className='btn list-btn btn-danger'>Delete</button>
        <button onClick={()=>updateHandler(index)} className='btn list-btn btn-info'>Update</button>
        </li>))}</ul>
      </div>
    </div>
  )
}
