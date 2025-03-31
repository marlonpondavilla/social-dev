"use client"

import { useAuth } from "@/context/AuthContext"
import Image from "next/image";

const ProfilePage = () => {
  const {userData} = useAuth();
  return (
    <div className="relative flex flex-col items-center justify-center h-screen gap-2">
      <div className="relative">
        <Image 
          src={userData?.photoURL || "No profile"} 
          width={50}
          height={50}
          className="rounded-full" 
          alt=""
        />
        <span className="bottom-0 left-9 absolute w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
      <span className="text-sm">
        {userData?.displayName || "No name"}
      </span>
    </div>

  )
}

export default ProfilePage
