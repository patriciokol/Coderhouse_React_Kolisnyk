import { useState } from 'react'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nosotros from './components/Nosotros'
import ErrorPage from './components/ErrorPage'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CartContextProvider from './components/context/CartContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route path="/producto/:idProducto" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
