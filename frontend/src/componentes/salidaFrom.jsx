import { useState } from "react"
// import axios from 'axios'
import useGestionGrupoStore from "../store/salidaStore";
import NavegadorIncicio from "./navegador";

const SalidaFrom = ()=>{
    const {addGestionGrupo} = useGestionGrupoStore()

    const [gestionGrupoData, setGestionGrupoData] = useState({
        idAlmacen:"",
        fechaSalida:""
    });
    console.log(gestionGrupoData);

    const handleInputchange = (e)=>{
        const {name,value} = e.target;
        setGestionGrupoData({
            ...gestionGrupoData,
            [name]:value
        })

    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        addGestionGrupo(gestionGrupoData)
        setGestionGrupoData({
            idAlmacen:"",
            fechaSalida:""
        })
        alert("salida added successfully")
       
    }

    return(
        <div>
            <div><NavegadorIncicio></NavegadorIncicio></div>
            <h1>salida Form</h1>
            <form 
            onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter idAlmacen"
                required
                name="idAlmacen"
                value={gestionGrupoData.idAlmacen}
                onChange={handleInputchange}
                />
                <input
                type="text"
                placeholder="Enter fechaSalida"
                required
                name="fechaSalida"
                value={gestionGrupoData.fechaSalida}
                onChange={handleInputchange}
                />
                <button>save</button>
            </form>
        </div>
    )
}
export default SalidaFrom