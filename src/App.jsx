import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error/Error'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<>
            <div className='row justify-content-center text-center my-5'>
              <div className='col'>
                <ItemListContainer greetings='Conoce nuestros ultimos productos' />
              </div>
            </div>
          </>}></Route>
          <Route path='/category/:id' element={<ItemListContainer greetings={''} />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
