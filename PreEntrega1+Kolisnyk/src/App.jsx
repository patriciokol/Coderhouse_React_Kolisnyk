import { useState } from 'react'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/zapatillas" element={<Home />}/>
        <Route path="/lanzamientos" element={<Home />}/>
        <Route path="/nosotros" element={<Home />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
      <ItemListContainer greeting={"No se encontraron productos"} /> 
      </BrowserRouter>
    </>
  )
}

export default App
