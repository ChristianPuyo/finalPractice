import { useState } from "react"
import axios from 'axios'
import useStudentStore from "../store/studentStore"
import NavegadorIncicio from "./navegador"

const ProductoFrom = ()=>{
    const {addStudent} = useStudentStore()

    const [studentData, setStudentData] = useState({
        nombre:"",
        precio:"",
        categoria:""
    });
    console.log(studentData);

    const handleInputchange = (e)=>{
        const {name,value} = e.target;
        setStudentData({
            ...studentData,
            [name]:value
        })

    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        addStudent(studentData)
        setStudentData({
            nombre:"",
            precio:"",
            categoria:""
        })
        alert("producto added successfully")
       
    }

    return(
        <div>
            <div><NavegadorIncicio></NavegadorIncicio></div>
            <h1>Producto Form</h1>
            <form 
            onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter nombre"
                required
                name="nombre"
                value={studentData.nombre}
                onChange={handleInputchange}
                />
                <input
                type="text"
                placeholder="Enter precio"
                required
                name="precio"
                value={studentData.precio}
                onChange={handleInputchange}
                />
                <input
                type="text"
                placeholder="Enter categoria"
                required
                name="categoria"
                value={studentData.categoria}
                onChange={handleInputchange}
                />
                <button>save</button>
            </form>
        </div>
    )
}
export default ProductoFrom