import { useState } from "react";
import axios from 'axios';
import useContactoStore from "../../store/contactoStore";

const ContactoForm = ()=>{
    const {addContacto} = useContactoStore()
    const [contactoData, setContactoeData] = useState({
        nombre:"",
        celular:"",
        correo:""  
    })

    console.log(contactoData);

    const handleInputChange = (e)=>{
        const  {name, value} = e.target;
        setContactoeData({
            ...contactoData,
            [name]:value
        })

    }

    const  handleSubmit = async(e)=>{
        e.preventDefault();
        addContacto(contactoData)
        setContactoeData({
            nombre:"",
            celular:"",
            correo:""
        })
        alert("contacto Added Successfully")

        
    }

    

    return(
        <div>
            <h1>contacto Form</h1>
            <form  onSubmit={handleSubmit}>

                <input
                  type="text"
                  placeholder="Enter nombre"
                  required
                  name="nombre"
                  value={contactoData.nombre}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Enter celular"
                  required
                  name="celular"
                  value={contactoData.celular}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Enter correo"
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

export default  ContactoForm;
