import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import StudentForm from './component/contactosFrom/contactosFrom'
import StudentList from './component/listaContactos/Contactoslist'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StudentForm/>} />
          <Route path='/navegador' element={<StudentList/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
