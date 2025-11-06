import React from 'react'
import { PiSignInThin } from "react-icons/pi";

function Navbar() {
  return (
    <div className='flex justify-between h-10 px-10 bg-[#007CBF] text-white font-semibold'>
      <ul className='flex items-center gap-5'>
        <li>Drivers</li>
        <li>Diagnostics</li>
        <li>Products</li>
        <li>My Account</li>
      </ul>
      <div className='flex items-center gap-2'>
        <PiSignInThin className='text-xl' />
        <h4>Sign In</h4>
      </div>
    </div>
  )
}

export default Navbar
