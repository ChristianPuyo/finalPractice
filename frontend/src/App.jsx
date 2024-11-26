import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import HomeComponent  from './components/homecomponent/HomeComponent'
import ProductForm from './components/Producto/Producto'
import ProductList from './components/productoList/ProductoList'


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<ProductForm/>} />
        <Route path="/productoList" element={<ProductList/>} />
        
        
      </Routes>


    </BrowserRouter>
      
    </>
  )
}
export default App
