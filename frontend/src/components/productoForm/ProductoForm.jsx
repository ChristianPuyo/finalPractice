import { useState } from "react";
import axios from 'axios';
import useProductoStore from "../../store/productoStore";

const ProductoForm = ()=>{
    const {addProducto} = useProductoStore()
    const [productoData, setProductoData] = useState({
        firstName:"",
        price:"",
        amount:"",
        category:"",
    })

    console.log(productoData);

    const handleInputChange = (e)=>{
        const  {name, value} = e.target;
        setProductoData({
            ...productoData,
            [name]:value
        })

    }

    const  handleSubmit = async(e)=>{
        e.preventDefault();
        addProducto(productoData)
        setProductoData({
            firstName:"",
            price:"",
            amount:"",
            category:"",
        })
        alert("Producto Added Successfully")

        
    }

    

    return(
        <div>
            <h1>Producto Form</h1>
            <form  onSubmit={handleSubmit}>

                <input
                  type="text"
                  placeholder="Enter firstname"
                  required
                  name="firstName"
                  value={productoData.firstName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Enter price"
                  required
                  name="price"
                  value={productoData.price}
                  onChange={handleInputChange}
                />
                 <input
                  type="text"
                  placeholder="Enter amount"
                  required
                  name="amount"
                  value={productoData.amount}
                  onChange={handleInputChange}
                />
                 <input
                  type="text"
                  placeholder="Enter category"
                  required
                  name="category"
                  value={productoData.category}
                  onChange={handleInputChange}
                />
                <button>Save</button>
            </form>
        </div>
    )
}

export default  ProductoForm;