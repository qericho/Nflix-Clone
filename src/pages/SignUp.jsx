import Netflix_BG from '../assets//img/netflix_bg.jpg'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="w-full h-full">
        <img src={Netflix_BG} alt="/" className='hidden md:block w-full h-screen absolute object-cover'/>
        <div className='w-full h-screen bg-black/60 fixed top-0 left-0' ></div>
        <div className='fixed w-full h-screen px-4 py-24'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/70 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
                <form className='w-full flex flex-col py-4'>
                  <input type="email" placeholder='Email' className='p-3 my-2 bg-gray-800'/>
                  <input type="Password" placeholder='Password' className='p-3 my-2 bg-gray-800'/>
                  <button className='py-3 my-6 bg-red-600 hover:bg-red-700 rounded font-bold cursor-pointer'>Sign up</button>
                  <div className='flex items-center justify-between text-gray-600'>
                  <p><input type="checkbox" className='mr-2'/>Remember me?</p>
                  <p>Need Help?</p>
                  </div>
                  <p className='text-gray-600 py-8'>Alredy subscribed to Netflix?
                    <Link to={'/login'}>
                    <span className='text-white cursor-pointer'> Sign in</span>
                    </Link>
                    </p>
                </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SignUp
