import { useState } from 'react'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ItemListContainer greeting={"No se encontraron productos"} />
    </>
  )
}

export default App
