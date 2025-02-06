import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/home"
<<<<<<< HEAD
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
=======
>>>>>>> 151f71d (Initial commit)

const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
<<<<<<< HEAD
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
=======
>>>>>>> 151f71d (Initial commit)
        </Routes>
    </div>
  )
}

export default App
