import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn">
          {/* <i class="fa-solid fa-bars"></i> */}
          <i className='fas fa-bars'></i>
        </label>
        <div class="nav-mobile">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </>
  )
}

export default App
