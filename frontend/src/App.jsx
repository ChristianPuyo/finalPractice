import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeComponent from './components/homeComponent/HomeComponent'

import ContactoForm from './components/contactoForm/ContactoForm'
import ContactoList from './components/contactoList/ContactoList'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComponent/>} />
          <Route path='/studentform' element={<ContactoForm/>}/>
          <Route path='/studentlist' element={<ContactoList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
