import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ContactoForm from './components/form/contactoForm'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/contactoForm' element={<ContactoForm></ContactoForm>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
