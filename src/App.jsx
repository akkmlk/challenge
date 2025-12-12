import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";

function App() {

  return (
    <>
      {/* <div className="w-full bg-gray-100 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Tailwind v4 + React JSX 🎉
        </h1>
      </div> */}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
