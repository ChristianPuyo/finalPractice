import { useEffect, useState } from "react";
import useCourseStore from "../store/almacenStore";
import NavegadorIncicio from "./navegador";

const AlmacenList = () => {
    const { fetchCourses, courses, deleteCourse, updateCourse } = useCourseStore();
    const [editingCourse, setEditingCourse] = useState(null); 
    const [formData, setFormData] = useState({ idProducto: '', fechaIngreso: '', cantidad: '' });
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchCourses();
    }, []);

    const filteredCourses = courses.filter((course) =>
        Object.values(course)
            .join(" ")
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );

    const handleDelete = (idAlmacen) => {
        if (window.confirm("Are you sure?")) {
            deleteCourse(idAlmacen);
            fetchCourses(); // Refresca 
        }
    };
s
    const handleEditClick = (course) => {
        setEditingCourse(course);
        setFormData({ idProducto: course.idProducto, fechaIngreso: course.fechaIngreso, cantidad: course.cantidad })
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdate = async () => {
        await updateCourse(editingCourse.idAlmacen, formData) 
        setEditingCourse(null)
        fetchCourses()
    };

    return (
        <div>
            <div><NavegadorIncicio /></div>
            <div>
                <h1>Almacen List</h1>
                <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                        padding: "8px",
                        margin: "10px 0",
                        width: "100%",
                        borderRadius: "4px",
                        border: "1px solid #ccc"
                    }}
                />

                <div>
                    {filteredCourses.map((user) => (
                        <div key={user.idAlmacen}>
                            <h3>{user.idAlmacen}<br /> {user.idProducto} {user.fechaIngreso} {user.cantidad}</h3>
                            <button onClick={() => handleDelete(user.idAlmacen)}>❌</button>
                            <button onClick={() => handleEditClick(user)}>✍️</button>
                        </div>
                    ))}
                </div>
            </div>

            {editingCourse && (
                <div>
                    <h3>Edit Course</h3>
                    <input
                        type="text"
                        name="idProducto"
                        value={formData.idProducto}
                        onChange={handleInputChange}
                        placeholder="idProducto"
                    />
                    <input
                        type="text"
                        name="fechaIngreso"
                        value={formData.fechaIngreso}
                        onChange={handleInputChange}
                        placeholder="fechaIngreso"
                    />
                    <input
                        type="text"
                        name="cantidad"
                        value={formData.cantidad}
                        onChange={handleInputChange}
                        placeholder="cantidad"
                    />
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setEditingCourse(null)}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default AlmacenList;
