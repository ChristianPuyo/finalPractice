import { useState } from "react";
import axios from 'axios'
import useStudentStore from "../store/studentStore";

const StudentForm = () => {
    const { addStudent } = useStudentStore()
    const [studentData, setStudenteData] = useState({
        Nombre: "",
        Numero_Telefono: "",
        Correo: ""
    })

    console.log(studentData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudenteData({
            ...studentData,
            [name]: value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        addStudent(studentData)
        setStudenteData({
            Nombre: "",
            Numero_Telefono: "",
            Correo: ""
        })
        alert("Datos Registrados")
    }



    return (
        <div>
            <h1>Student Form</h1>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter Nombre"
                    required
                    name="Nombre"
                    value={studentData.Nombre}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Enter Numero_telefono"
                    required
                    name="Numero_Telefono" // Cambiado para coincidir con el estado
                    value={studentData.Numero_Telefono}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Enter Correo"
                    required
                    name="Correo"
                    value={studentData.Correo}
                    onChange={handleInputChange}
                />
                <button>Guardar</button>
            </form>
        </div>
    )
}

export default StudentForm;