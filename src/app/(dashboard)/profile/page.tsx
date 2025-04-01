
import React from 'react'
import ProfilePageClient from './profile-page'

export default async function ProfilePae() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay

  return (
    <ProfilePageClient/>    
  )
}
