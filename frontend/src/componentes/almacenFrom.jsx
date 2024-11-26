import { useState } from "react"
// import axios from 'axios'
import useCourseStore from "../store/almacenStore";
import NavegadorIncicio from "./navegador";

const AlmacenFrom = ()=>{
    const {addCourse} = useCourseStore()

    const [CourseData, setCourseData] = useState({
        idProducto:"",
        fechaIngreso:"",
        cantidad:""
    });
    console.log(CourseData);

    const handleInputchange = (e)=>{
        const {name,value} = e.target;
        setCourseData({
            ...CourseData,
            [name]:value
        })

    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        addCourse(CourseData)
        setCourseData({
            idProducto:"",
            fechaIngreso:"",
            cantidad:""
        })
        alert("almacen creado added successfully")
       
    }

    return(
        <div>
            <div><NavegadorIncicio></NavegadorIncicio></div>
            <h1>Almacen Form</h1>
            <form 
            onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter idProducto"
                required
                name="idProducto"
                value={CourseData.idProducto}
                onChange={handleInputchange}
                />
                <input
                type="text"
                placeholder="Enter fechaIngreso"
                required
                name="fechaIngreso"
                value={CourseData.fechaIngreso}
                onChange={handleInputchange}
                />
                <input
                type="text"
                placeholder="Enter cantidad"
                required
                name="cantidad"
                value={CourseData.cantidad}
                onChange={handleInputchange}
                />
                <button>save</button>
            </form>
        </div>
    )
}
export default AlmacenFrom