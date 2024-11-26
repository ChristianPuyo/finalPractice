import { useState } from "react"
// import axios from 'axios'
import useContactoStore from "../../store/contactoStore";
// import Navegador from "../navegador/Navegador";

const ContactoForm = ()=>{
    const {addContacto} = useContactoStore()

    const [contactoData, setContactoData] = useState({
        
        firstname:"",
        lastname:"",
        telefono:"",
        correo:""
    });
    console.log(contactoData);

    const handleInputchange = (e)=>{
        const {name,value} = e.target;
        setContactoData({
            ...contactoData,
            [name]:value
        })

    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        addContacto(contactoData)
        setContactoData({
            
            firstname:"",
            lastname:"",
            telefono:"",
            correo:""
        })
        alert("Contacto added successfully")
       
    }

    return(
        <div>
            <div><Navegador></Navegador></div>
            <h1>Contacto Form</h1>
            <form 
            onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter firstname"
                required
                name="firstname"
                value={contactoData.firstname}
                onChange={handleInputchange}
                />
                <input
                type="text"
                placeholder="Enter lastname"
                required
                name="lastname"
                value={contactoData.lastname}
                onChange={handleInputchange}
                />
                <input
                type="text"
                placeholder="Enter telefono"
                required
                name="telefono"
                value={contactoData.telefono}
                onChange={handleInputchange}
                />
                <input
                type="text"
                placeholder="Enter correo"
                required
                name="correo"
                value={contactoData.correo}
                onChange={handleInputchange}
                />
               
                <button>save</button>
            </form>
        </div>
    )
}
export default ContactoForm