import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeComponent from './components/homeComponent/HomeComponent'
import ProductoForm from './components/productoForm/ProductoForm'
import ProductoList from './components/ProductoList/ProductoList'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComponent/>} />
          <Route path='/productoform' element={<ProductoForm/>}/>
          <Route path='/productolist' element={<ProductoList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App