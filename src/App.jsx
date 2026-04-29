import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoApp from './components/TodoApp'
import "bootstrap/dist/css/bootstrap.css"
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Counter/>
   <TodoApp/>
    </>
  )
}

export default App
