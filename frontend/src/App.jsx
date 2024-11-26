import { BrowserRouter, Routes, Route }  from 'react-router-dom'
import StudentForm from './componentes/studentForm/StudentForm'
import HomeComponent from './componentes/homeComponent/HomeComponent'


function App() {

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='/studentForm' element={<StudentForm/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
