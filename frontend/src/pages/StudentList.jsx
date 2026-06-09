import React from 'react'
import { Pencil, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const StudentList = () => {
  const { students, deleteStudent } = useAppContext()
  const navigate = useNavigate()

  return (
    <div className="p-8">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-4 tracking-tight">Student Records</h2>
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <table className="w-full text-sm text-left align-middle">
          <thead className="bg-gray-800 text-white uppercase text-xs tracking-widest">
            <tr>
              <th className="px-6 py-5 font-bold">#</th>
              <th className="px-6 py-5 font-bold">Name</th>
              <th className="px-6 py-5 font-bold">Age</th>
              <th className="px-6 py-5 font-bold text-center">Stream</th>
              <th className="px-6 py-5 font-bold text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={student._id}
                className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 hover:scale-[1.001] transition-all duration-150`}
              >
                <td className="px-6 py-4 font-bold text-gray-400">{index + 1}</td>
                <td className="px-6 py-4 font-extrabold text-gray-900">{student.name}</td>
                <td className="px-6 py-4 font-bold text-gray-700">{student.age}</td>
                <td className="px-6 py-4 text-center">
                  <span className="bg-blue-100 text-blue-700 font-bold text-xs px-3 py-1 rounded-full">
                    {student.stream}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => navigate(`/edit-student/${student._id}`)}
                      className="p-2 rounded-lg text-blue-600 hover:bg-blue-100 transition-colors duration-150"
                      title="Edit"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => deleteStudent(student._id)}
                      className="p-2 rounded-lg text-red-500 hover:bg-red-100 transition-colors duration-150"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentList
