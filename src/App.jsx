import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error/Error'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartProvider from './components/Context/CartContext'
import Cart from './components/Cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<>
              <ItemListContainer greetings='3 CUOTAS SIN INTERÉS en toda la tienda ENVÍO GRATIS' />
            </>}></Route>
            <Route path='/category/:id' element={<ItemListContainer greetings={'3 CUOTAS SIN INTERÉS en toda la tienda ENVÍO GRATIS'} />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path={"/Cart"} element={<Cart />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        </CartProvider>
      </BrowserRouter >
    </>
  )
}

export default App
