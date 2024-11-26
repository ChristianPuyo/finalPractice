import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'  // esto envuelve todo
import AlmacenFrom from './componentes/almacenFrom'
import ProductoFrom from './componentes/productoFrom'
import SalidaFrom from './componentes/salidaFrom'
import AlmacenList from './componentes/almacenList'
import SalidaList from './componentes/salidaList'
import ProductoList from './componentes/productoList'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AlmacenFrom></AlmacenFrom>}/>
          <Route path='/producto' element={<ProductoFrom></ProductoFrom>}/>  
          <Route path='/salida' element={<SalidaFrom></SalidaFrom>}/>  
          <Route path='/almacenList' element={<AlmacenList></AlmacenList>}/>  
          <Route path='/salidaList' element={<SalidaList></SalidaList>}/>  
          <Route path='/productoList' element={<ProductoList></ProductoList>}/>  
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
