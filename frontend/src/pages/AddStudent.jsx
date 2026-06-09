import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserPlus } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

const AddStudent = () => {
  const navigate = useNavigate()
  const { addStudent } = useAppContext()
  const [form, setForm] = useState({ name: '', age: '', stream: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.age || !form.stream) return
    await addStudent({ ...form, age: Number(form.age) })
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center pt-16 p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-100 p-2 rounded-full">
            <UserPlus size={22} className="text-blue-600" strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-800">Add New Student</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Age</label>
            <input
              name="age"
              type="number"
              value={form.age}
              onChange={handleChange}
              placeholder="Age"
              min="1"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Stream</label>
            <select
              name="stream"
              value={form.stream}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="" className="font-bold">Select stream</option>
              <option value="Science" className="font-bold">Science</option>
              <option value="Mathematics" className="font-bold">Mathematics</option>
              <option value="Commerce" className="font-bold">Commerce</option>
              <option value="Arts" className="font-bold">Arts</option>
            </select>
          </div>

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex-1 border border-gray-200 text-gray-600 font-bold py-2.5 rounded-lg hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white font-extrabold py-2.5 rounded-lg hover:bg-blue-700 active:scale-95 transition-all"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddStudent
