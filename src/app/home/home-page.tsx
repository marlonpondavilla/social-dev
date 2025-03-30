"use client"
import LogoutButton from '@/components/logoutButton'
import { useAuth } from '@/context/AuthContext'
import React from 'react'


const HomePageClient = () => {
  const {userData} = useAuth()

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'> 
      <h1 className='text-center text-4xl'>Homepage</h1>
      <h2>Welcome, {userData?.displayName}</h2>
      <h3>Email: {userData?.email}</h3>
      <h4>UID: {userData?.uid}</h4>
      <LogoutButton/>
    </div>
  )
}

export default HomePageClient
