import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeComponent from './componentes/homeComponent/HomeComponent'
import ProductosForm from './componentes/productosForm/ProductosForm'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComponent/>} />
          <Route path='/formproductos' element={<ProductosForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
} 

export default App