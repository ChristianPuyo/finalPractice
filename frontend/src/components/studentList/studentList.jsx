import { useEffect } from "react"
import useContactoStore from "../../store/contactoStore"
import style from './StudentList.module.css'


const ContactoList = () => {
    const {fetchcontactos,contactos, deleteContacto} = useContactoStore();
    useEffect(()=>{
        fetchcontacto();
    },[])

     const  handleDelete = (id) => {
        if(window.confirm("Are you sure")){
        deleteContacto(id);
        }
     }

    return(<div>
        <h1>Contacto List</h1>
        {
            students.map((user)=>{
                return(
                    <div className={style.container}>
                        <h3>{user.Name} {user.telefono}{user.email}</h3>
                        <button onClick={()=>handleDelete(user.id)}>❌</button>
                        <button>✍️</button>
                    </div>
                )
            })
        }
    </div>)
}
export default ContactoList