import { useState } from "react";
import axios from 'axios'
import useContactoStore from "../../store/contactoStore";

const ContactoForm = () => {
    const {addContacto}=useContactoStore()
    const [contactoData, setContactoData] = useState({
        Name:"",
        telefono:"",
        email:"",
    })

    console.log(studentData);

    const handleInputChange = (e) => {
       const {name, value} = e.target;
       setContactoData({
        ...contactoData, 
        [name]: value
    });
    }

    const  handleSubmit = async (e) => {
        e.preventDefault();
      addContacto(studentData)
      setContactoData({
        Name:"",
        telefono:"",
        email:"",
      })
      alert("contacto added")
    }

      

   return(
    <div>
        <h1>contacto Form</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="name"
            required
            name="Name"
            value={contactoData.Name}
            onChange={handleInputChange}
            />
            <input
            type="text"
            placeholder="telefono"
            required
            name="telefono"
            value={contactoData.telefono}
            onChange={handleInputChange}
            />
            <input
            type="text"
            placeholder="correo"
            required
            name="correo"
            value={contactoData.correo}
            onChange={handleInputChange}
            />

            <button>Save</button>

        </form>
    </div>
   )
} 

export default StudentForm