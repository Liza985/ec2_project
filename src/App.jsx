import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1>My React Application Deploy on AWS </h1>
    <img src={reactLogo} alt="react logo" className='react_logo'/>
</div>
  )
}

export default App
