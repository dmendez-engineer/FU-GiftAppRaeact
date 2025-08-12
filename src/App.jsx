/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstApp from './FirstApp'
import CounterApp from './CounterApp'


function App() {
  const [count, setCount] = useState(0)

  const title="Soy DMS";
  const valor=25;
  return (
    <>
      <FirstApp title={title}/>

      <CounterApp valor={valor}/>
    </>
  )
}

export default App
