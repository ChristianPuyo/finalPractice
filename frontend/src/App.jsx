import './App.css'
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'
import ContactForm from './components/contacForm/ContacForm'
import ContactList from './components/ContacList/ContacList'


function App() {

  return (
    <>
      <BrowserRouter>
      <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/">Contact Form</Link>
            </li>
            <li>
              <Link to="/contact-list">Contact List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<ContactForm/>} />
          <Route path='/contact-list' element={<ContactList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
