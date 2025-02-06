import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import SignUp from "./pages/SignUp.jsx"
import Login from "./pages/Login.jsx"

const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default App
