import React from "react";

export default function ManagerHomePage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Projects</h1>

        <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Project
        </button>
      </div>

      <div className="mt-6 grid grid-cols-12 gap-4 items-center">
        <div className="col-span-6">
          <label className="block text-sm text-gray-600 mb-2">Search</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full border rounded-lg py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <label className="block text-sm text-gray-600 mb-2">Status</label>
          <select className="w-full border rounded-lg py-2 px-3">
            <option>All</option>
          </select>
        </div>

        <div className="col-span-2">
          <label className="block text-sm text-gray-600 mb-2">Order by</label>
          <select className="w-full border rounded-lg py-2 px-3">
            <option>Name</option>
          </select>
        </div>

        <div className="col-span-2">
          <label className="block text-sm text-gray-600 mb-2">Order</label>
          <select className="w-full border rounded-lg py-2 px-3">
            <option>All</option>
          </select>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center justify-center text-center text-gray-600">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M8 7V5a4 4 0 118 0v2" />
          </svg>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-2">No Projects Yet</h2>
        <p className="text-sm text-gray-500 mb-6">Get started by creating your first data labeling project</p>

        <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create Project
        </button>
      </div>
    </div>
  );
}
