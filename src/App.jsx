import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row justify-content-center text-center my-5'>
          <div className='col'>
            <ItemListContainer greetings='Mate 1' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
