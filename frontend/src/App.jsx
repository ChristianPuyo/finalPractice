import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeComponent from './components/homeComponent/HomeComponent'
import StudentForm from   './components/studentForm/StudentForm'
import  StudentList from  './components/studentList/studentList'

function App (){
return ( 
  <>
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<HomeComponent/>}  />
       <Route path='/StudentForm' element={<StudentForm/>}/>
       <Route path ='/StudentList' element={<StudentList/>}/>
     </Routes>     
   </BrowserRouter>

   </>
)
}

export default App
