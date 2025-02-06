import Netflix_BG from '../assets//img/netflix_bg.jpg'

const SignUp = () => {
  return (
    <div className="w-full h-full">
        <img src={Netflix_BG} alt="/" className='hidden md:block w-full h-screen absolute object-cover'/>
        <div className='w-full h-screen bg-black/60 fixed top-0 left-0' ></div>
        
    </div>
  )
}

export default SignUp
