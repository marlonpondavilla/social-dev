"use client"

import GoogleButton from "@/components/googleButton"

export default function LoginPage() {

  return (
    
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-center text-2xl">Login Now</h1>
      <GoogleButton/>
    </div>
  )

}
