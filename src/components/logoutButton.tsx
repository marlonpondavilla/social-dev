"use client"

import React from 'react'
import { useAuth } from "@/context/AuthContext"

const LogoutButton = () => {
  const {logout} = useAuth();

  return (
    <div>
      <button 
        className='bg-red-500 py-3 px-6 mt-2 text-white rounded-full hover:bg-red-400 cursor-pointer'
        onClick={logout}
      >
        Logout
      </button>
    </div>
  )
}

export default LogoutButton
