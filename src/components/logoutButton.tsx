"use client"

import React from 'react'
import { useAuth } from "@/context/AuthContext"

const LogoutButton = () => {
  const {logout} = useAuth();

  return (
    <div>
      <button 
        className='bg-red-500 py-2 px-4 mt-2 text-white rounded-md hover:textred4'
        onClick={logout}
      >
        Logout
      </button>
    </div>
  )
}

export default LogoutButton
