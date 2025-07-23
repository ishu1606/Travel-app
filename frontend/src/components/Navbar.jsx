import React from 'react';
import { Link } from "react-router-dom";
import Profile from './Profile';

const Navbar = () => {
  return (
    <div className='bg-white flex items-center justify-between px-10 py-2 drop-shadow sticky top-0 z-10'>
        <Link to={"/"}>
            <h1 className='text-2xl font-bold sm:text-2xl flex flex-wrap'>
                <span className='text-blue-300'>Travel</span>
                <span className='text-blue-500'>App</span>
            </h1>
        </Link>

        <Profile />
    </div>
  )
}

export default Navbar