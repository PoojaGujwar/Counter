import React, { useState } from 'react'
import "./calculator.css"

const Calculator = () => {
  const [inputVal, setInputVal] = useState('')
  const [operator,setOperator] = useState('')
  //basic eval and swith method
  const handleInput =(val)=>{
    setInputVal((pre)=> pre + val);
  }
  const calculate =()=>{
    // eval method 
    // let result = eval(inputVal)
    // setInputVal(result)
   //basic
   const parts = inputVal.split(operator)
  if(parts.length !==2) return;

  const num1 = Number(parts[0]);
  const num2 = Number(parts[1]);
  let result = 0;
  switch(operator){
    case '+':
      result = num1+num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      return;
  }
  setInputVal(result)
  }
  const handleOperator =(op)=>{
    setOperator(op);
    setInputVal((prev)=>prev+op);
  }

//   const calculate =()=>{
//     const tokens = inputVal.match();
//     // console.log(token)
// // 7+6*6
//     let temp = [];
//     for(let i=0; i<tokens.length; i++){
//       let curr = tokens[i];
//       if(curr === '*' || curr === '/'){
//         let prev = temp.pop()
//         let next = tokens[i+1]

//         let result = curr === '*'?prev * next:prev / next;

//         temp.push(result);
//         i++
//         // console.log(next)
//         // console.log(prev)
//       }else{
//         temp.push(curr)
//       }

//     }

//     let finalResult = Number(temp[0]);
//     console.log(finalResult)
//     for(let i = 1; i<temp.length; i+=2){
//       let op = temp[i];
//       let num = Number(temp[i+1]);
//       if(op === '+'){
//         finalResult +=num
//       }else{
//         finalResult -=num;
//       }
//     }
//     setInputVal(finalResult)
//   }


  return (
    <div className='m-5 d-flex justify-content-center flex-column align-items-center'>
      <h1 className=''>Calculator</h1>
      <div className=''>
      <table className='text-center'>
        <tbody>
        <tr><td colSpan={4}><input type='text' className='form-control mb-3' value={inputVal}/></td></tr>
        <tr>
            <td scope='col' ><button onClick={()=>handleInput(1)}>1</button></td>
            <td><button onClick={()=>handleInput(2)}>2</button></td>
            <td><button onClick={()=>handleInput(3)}>3</button></td>
            <td><button onClick={()=>handleInput(4)}>4</button></td>
        </tr>
         <tr>
            <td><button onClick={()=>handleInput(5)}>5</button></td>
            <td><button onClick={()=>handleInput(6)}>6</button></td>
            <td><button onClick={()=>handleInput(7)}>7</button></td>
            <td><button onClick={()=>handleInput(8)}>8</button></td>
        </tr>
         <tr>
            <td><button onClick={()=>handleInput(9)}>9</button></td>
            <td><button onClick={()=>handleInput(0)}>0</button></td>
            <td> <button onClick={()=>calculate()}>=</button></td>
            <td> <button onClick={()=>setInputVal('')}>C</button></td>
        </tr>
         <tr>
            <td><button onClick={()=>handleOperator('+')}>+</button></td>
            <td><button onClick={()=>handleOperator('-')}>-</button></td>
            <td><button onClick={()=>handleOperator('*')}>*</button></td>
            <td><button onClick={()=>handleOperator('/')}>/</button></td>
        </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Calculator





