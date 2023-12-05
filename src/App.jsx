import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error/Error'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<>
            <ItemListContainer greetings='3 CUOTAS SIN INTERÉS en toda la tienda ENVÍO GRATIS' />
          </>}></Route>
          <Route path='/category/:id' element={<ItemListContainer greetings={'3 CUOTAS SIN INTERÉS en toda la tienda ENVÍO GRATIS'} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
