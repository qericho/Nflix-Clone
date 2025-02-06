import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"

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
