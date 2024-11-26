import { useEffect } from "react"
import useContactoStore from "../../store/contactoStore"


const ContactoList = ()=>{
    const { fetchContactos, contactos, deleteContacto} = useContactoStore();
    useEffect(()=>{
        fetchContactos();
    },[])

    const  handleDelete = (id)=>{
        if(window.confirm("Are you sure?")){
            deleteContacto(id);
        }
    }


    return(<div>
        <h1>contacto List</h1>
        {
            contactos.map((user)=>{
            return(
                <div className={style.container}>
                    <h3>{user.nombre} {user.celular}{user.correo}</h3>
                    <button onClick={()=>handleDelete(user.id)}>❌</button>
                    <button>✍️</button>
                </div>
            )
          })  
        }
    </div>)
}

export default ContactoList