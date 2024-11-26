import { useState } from "react";
import axios from 'axios';
import useStudentStore from "../../store/studentStore";

const StudentForm = () => {
    const { addStudent } = useStudentStore();
    const [studentData, setStudentData] = useState({
        nombre: "",
        numero: "",
        correo: ""
    });

    console.log(studentData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudentData({
            ...studentData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        addStudent(studentData);
        setStudentData({
            nombre: "",
            numero: "",
            correo: ""
        });
        alert("contacto Added Successfully");
    };

    return (
        <div>
            <h1>contactos Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter name"
                    required
                    name="nombre"
                    value={studentData.nombre}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    placeholder="Enter number"
                    required
                    name="numero"
                    value={studentData.numero}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    placeholder="Enter email"
                    required
                    name="correo"
                    value={studentData.correo}
                    onChange={handleInputChange}
                />
                <button>Save</button>
            </form>
        </div>
    );
};

export default StudentForm;
