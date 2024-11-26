import { useState } from "react"
import axios from 'axios'
import useProductoStore from "../../store/productoStore";

const ProductoForm = ()=>{
    const {addProducto} = useProductoStore()

    const [productoData, setProductoData] = useState({
        nombre:"",
        precio:"",
        cantidad:"",
        categoria:""

    });
    console.log(productoData);

    const handleInputchange = (e)=>{
        const {name,value} = e.target;
        setStudentData({
            ...productoData,
            [name]:value
        })

    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        addStudent(productoData)
        setStudentData({
            nombre:"",
            precio:"",
            cantidad:"",
            categoria:""
        })
        alert("producto added successfully")
        // try {
        //     const responce = await axios.post("http://localhost:3001/student",studentData)
        //     console.log("Responce",responce.data);
        // } catch (error) {
        //     console.log("error:",error)
        // }

    }

    return(
        <div>
            <h1>Producto Form</h1>
            <form 
            onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter Name"
                required
                name="Nombre"
                value={studentData.nombre}
                onChange={handleInputchange}
                />
                <input
                type="text"
                placeholder="Enter precio"
                required
                name="Precio"
                value={studentData.precio}
                onChange={handleInputchange}
                />
                <input
                type="text"
                placeholder="Enter cantidad"
                required
                name="Cantidad"
                value={studentData.cantidad}
                onChange={handleInputchange}
                />
                <input
                type="text"
                placeholder="Enter categoria"
                required
                name="Categoria"
                value={studentData.categoria}
                onChange={handleInputchange}
                />
                <button>save</button>
            </form>
        </div>
    )
}
export default ProductoForm