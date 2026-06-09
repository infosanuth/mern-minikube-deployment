import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserPlus } from 'lucide-react'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav className="bg-blue-600 text-white px-6 py-4 flex items-center relative">
            <h1 className="absolute left-1/2 -translate-x-1/2 text-xl font-extrabold tracking-wide">
                Students
            </h1>
            <button
                onClick={() => navigate('/add-student')}
                className="ml-auto bg-gray-100 text-blue-600 font-extrabold px-5 py-2 rounded-full shadow-md hover:bg-gray-200 hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center gap-2"
            >
                <UserPlus size={20} strokeWidth={2.5} />
                Add Student
            </button>
        </nav>
    )
}

export default Navbar
