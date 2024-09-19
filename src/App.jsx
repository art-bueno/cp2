import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <Hero/>

      </div>
    </>
  )
}

export default App
