<<<<<<< HEAD
import { Link } from "react-router-dom"
=======
>>>>>>> 151f71d (Initial commit)

const Navbar = () => {
  return (
    <nav className="absolute w-full  z-[100]">
        <div className="container p-2 md:p-4 mx-auto flex items-center justify-between">
            {/* Logo */}
            <div>
<<<<<<< HEAD
              <Link  to={'/'}>
                <h1
                 className="text-3xl md:text-5xl cursor-pointer
                  text-red-600 font-bold">NETFLIX</h1>
              </Link>
            </div>
            {/* Buttons */}
            
            <div>
            <Link to={'./signup'}>
                <button className="px-6 py-3 text-[16px] md:text-[18px]
                 font-medium text-white cursor-pointer">
                    Sign In</button>
            </Link>
            <Link to={'./login'}>
=======
                <h1
                 className="text-3xl md:text-5xl cursor-pointer
                  text-red-600 font-bold">NETFLIX</h1>
            </div>
            {/* Buttons */}
            <div>
                <button className="px-6 py-3 text-[16px] md:text-[18px]
                 font-medium text-white cursor-pointer">
                    Sign In</button>
>>>>>>> 151f71d (Initial commit)
                <button
                 className="px-6 py-2 bg-red-600 hover:bg-red-800
                  text-[16px] md:text-[18px] font-medium text-white cursor-pointer
                   rounded-md">Sign Up</button>
<<<<<<< HEAD
            </Link>
=======
>>>>>>> 151f71d (Initial commit)
            </div>
        </div>
    </nav>
  )
}

export default Navbar
