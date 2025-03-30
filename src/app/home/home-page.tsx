
import LogoutButton from '@/components/logoutButton'
import React from 'react'

const HomePageClient = () => {

  return (
    <div className='flex flex-col items-center justify-center h-screen'> 
      <h1 className='text-center text-4xl'>Homepage</h1>
      <LogoutButton/>
    </div>
  )
}

export default HomePageClient
