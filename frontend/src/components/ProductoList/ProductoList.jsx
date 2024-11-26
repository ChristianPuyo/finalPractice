import { useEffect } from "react"
import useProductoStore from "../../store/productoStore"
import style from './ProductoList.module.css'

const ProductoList = ()=>{
    const { fetchProductos, productos, deleteProductos } = useProductoStore();
    useEffect(()=>{
        fetchProductos();
    },[])

    const  handleDelete = (id)=>{
        if(window.confirm("Are you sure?")){
            deleteProductos(id);
        }
    }


    return(<div>
        <h1>Producto List</h1>
        {
          productos.map((user)=>{
            return(
                <div className={style.container}>
                    <h3>{user.firstName} {user.price} {user.amount} {user.category}</h3>
                    <button onClick={()=>handleDelete(user.id)}>❌</button>
                    <button>✍️</button>
                </div>
            )
          })  
        }
    </div>)
}

export default ProductoList