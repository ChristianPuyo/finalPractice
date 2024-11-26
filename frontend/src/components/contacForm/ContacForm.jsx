import { useState } from "react";
import usecontactStore from "../../store/studentStore";

const ContactForm=()=>{
    const {addcontact} = usecontactStore()
    const [contactData,setContactData]= useState({
        nombre:"",
        tel:"",
        email:""
    })

    console.log(contactData);

    const handleInputChange = (e)=>{
        const {name,value}=e.target;
        setContactData({
            ...contactData,
            [name]:value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(contactData);
        await addcontact(contactData);
        setContactData({
            nombre: "",
            tel: "",
            email: ""
        });
        alert("Contacto Guardado");
    };
    
    return(
        <div>
            <h1>Contact Form</h1>
            <form  onSubmit={handleSubmit}>

                <input
                  type="text"
                  placeholder="Enter name"
                  required
                  name="nombre"
                  value={contactData.nombre}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Enter telefono"
                  required
                  name="tel"
                  value={contactData.tel}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Enter email"
                  required
                  name="email"
                  value={contactData.email}
                  onChange={handleInputChange}
                />
                <button>Save</button>
            </form>
        </div>
    )
}

export default ContactForm;