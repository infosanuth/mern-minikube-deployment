import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [students, setStudents] = useState([]);

    const getStudents = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/students`);
            setStudents(data);
        } catch (error) {
            console.error(error.message);
        }
    };

    const addStudent = async (studentData) => {
        try {
            const { data } = await axios.post(`${backendUrl}/api/students`, studentData);
            setStudents((prev) => [...prev, data]);
        } catch (error) {
            console.error(error.message);
        }
    };

    const updateStudent = async (id, studentData) => {
        try {
            const { data } = await axios.put(`${backendUrl}/api/students/${id}`, studentData);
            setStudents((prev) => prev.map((s) => (s._id === id ? data : s)));
        } catch (error) {
            console.error(error.message);
        }
    };

    const deleteStudent = async (id) => {
        try {
            await axios.delete(`${backendUrl}/api/students/${id}`);
            setStudents((prev) => prev.filter((s) => s._id !== id));
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getStudents();
    }, []);

    const value = {
        backendUrl,
        students,
        getStudents,
        addStudent,
        updateStudent,
        deleteStudent,
    };

    return <AppContext.Provider
        value={value}>{children}
    </AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
