import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">DigiTools Platform Initiated</h1>
        <p className="text-lg opacity-70">Ready for development.</p>
        <button 
          className="btn btn-primary mt-6"
          onClick={() => alert("Project is ready!")}
        >
          Check Readiness
        </button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
