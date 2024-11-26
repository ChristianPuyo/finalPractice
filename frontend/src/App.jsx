import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importa BrowserRouter
import InicioComponente from "./components/inicioComponente/inicioComponente";
import EliminarProducto from "./components/eliminarProducto/eliminarProducto";
import ProductForm from "./components/agregarProducto/ProductoForm";
import EditProductoForm from "./components/editarProducto/editarProducto";
import ProductList from "./components/listaProducto/listaProducto";
// import StudenForm from "./usercomponente/studentForm/StudentForm";
// import StudentList from "./usercomponente/studentList/studentList";
// import EditForm from "./usercomponente/editForm/editForm";
// import EliminarUsuario from "./usercomponente/eliminarUsuario/eliminarUsuario";
// import ActualizarEstudiantes from "./usercomponente/actualizarForm/actualizarDatos";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InicioComponente />} />
          <Route path="/user" element={<ProductForm />} />
          <Route path="/userList" element={<ProductList />} />
          <Route path="/userEdit" element={<EditProductoForm />} />
          <Route path="/eliminarUsuario" element={<EliminarProducto />} /> 

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
