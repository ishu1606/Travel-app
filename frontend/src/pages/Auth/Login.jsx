import React, { useState } from 'react'
import PasswordInput from '../../components/PasswordInput.jsx'
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper.js';
import axiosInstance from '../../utils/axiosInstance.js';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess , signInFailure } from '../../redux/slice/userSlice.js';

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const[error , setError] = useState("")

  const {loading} = useSelector((state) => state.user)  

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!validateEmail(email)){
      setError("Please enter a valid email address")
      return
    }

    if(!password) {
      setError("Password cannot be empty")
      return
    }

    setError(null)

    // Login API call 
    try {
      dispatch(signInStart())
      const response = await axiosInstance.post("/auth/signin", {
        email,
        password
      })

      if(response.data) {
        dispatch(signInSuccess(response.data))
        navigate("/")
      } 
      else {dispatch(signInFailure("An Unexpected error occurred"))}    
    } catch (error) {
      dispatch(signInFailure("An Unexpected error occurred"))
      if(error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message)
      
    } else{
      setError("Something went wrong, please try again later")
    }
  }
  }

  return (
    <div className='h-screen bg-cyan-50 overflow-hidden relative '>
      <div className='login-ui-box right-10 -top-40' />
      <div className='container h-screen flex items-center justify-center px-20 mx-auto'>
        <div className="w-2/4 h-[90vh] flex items-end login-bg-img bg-[url('https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg')] bg-cover bg-center rounded-lg p-10 z-50">
          <div >
            <h4 className='text-5xl text-white font-semibold leasing-[58px] '>
              Create Your <br /> Stories
              </h4>
            <p className='text-[15px] text-white leading-6 pr-7 mt-4'>
              Record your travel experiences and memories in your travel journey
            </p>
          </div>
        </div>
         <div className='w-2/4 h-[75vh] bg-white rounded-r-lg relative p-16 shadow-lg shadow-cyan-200/20'>
            <form onSubmit={handleSubmit}>
              <h4 className='text-2xl font-semibold mb-7'>Login</h4>

              <input type="email" placeholder='Email' className='input-box' value={email} onChange={(e)=> setEmail(e.target.value)}/>

              <PasswordInput value={password} onChange={(e)=> {setPassword(e.target.value)}} />

              <p className='text-red-500 text-sm pb-1'>{error}</p>

              { loading ? (
                <span className='animate-pulse'>Loading....</span>
              ) : (<button type='submit' className='btn-primary ' >LOGIN</button>)}

              <p className='text-xs text-slate-500 text-center my-4'>OR</p>

              <button type='submit' 
              className='btn-primary btn-light'
              onClick={() => navigate("/sign-up")}>
                CREATE ACCOUNT</button>
            </form>
          </div>
      </div>  
    </div>
  )
}

export default Login