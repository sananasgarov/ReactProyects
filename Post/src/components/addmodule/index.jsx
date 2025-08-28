import { useState } from "react"

export default function AddModule({setHidden}) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Module added!")
    setTitle("")
    setContent("")
    setHidden(false);
  }
  return (
    <div className="max-w-md absolute z-60 inset-0 mx-auto h-[300px] mt-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
        >
          Add Module
        </button>
      </form>
    </div>
  )
}
