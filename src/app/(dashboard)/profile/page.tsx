"use client"

import { useAuth } from "@/context/AuthContext"
import Image from "next/image";

const ProfilePage = () => {
  const {userData} = useAuth();
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <section className="flex flex-col items-center justify-center gap-2">
        
        <Image 
          src={userData?.photoURL || "No image found"}
          width={100}
          height={100}
          alt="Profile Image"
          className="rounded-full border-2 border-gray-300"
        />
        <h2 className="text-center text-2xl">{userData?.displayName}</h2>
        <p className="text-center text-base">{userData?.email}</p>
      </section>
      
    </div>
  )
}

export default ProfilePage
