import React, { useState } from 'react';
import {  FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = ({value , onChange , placeholder}) => {
    const [isShowPassword, setIsShowPassword] = useState(false)

    const toggleShowpassword = () => {
        setIsShowPassword(!isShowPassword)
    }
  return (
    <div className='flex items-center bg-cyan-600/5 px-5 rounded-sm mb-3'>
        <input value={value} onChange={onChange} placeholder={placeholder || "Enter your password"} className='w-full text-sm bg-transparent py-3 mr-3 rounded-sm outline-hidden' 
        type= {isShowPassword ? "text" : "password"}  />

        {isShowPassword ? (<FaRegEye size={22} className='text-blue-500 cursor-pointer' onClick={() => toggleShowpassword()} />) : (<FaRegEyeSlash size={22} className='text-blue-500 cursor-pointer' onClick={()=>toggleShowpassword()} />  )  }
    </div>
  )
}

export default PasswordInput