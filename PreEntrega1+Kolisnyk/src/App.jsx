import { useState } from 'react'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nosotros from './components/Nosotros'
import ErrorPage from './components/ErrorPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer/> }/>
        <Route path="/productos" element={<ItemListContainer/> }/>
        <Route path="/categoria/:categoria" element={<ItemListContainer/> }/>
        <Route path="/nosotros" element={<Nosotros />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
