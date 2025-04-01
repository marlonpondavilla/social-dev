"use client"
import React, { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import Image from 'next/image'

const HomePageClient = () => {
  const {userData} = useAuth()
  const [showDropDown, setShowDropdown] = useState(false);
  const [liked, setLiked] = useState(false);
  const [isFrontEnd, setIsFrontEnd] = useState(false);
  const [isBackEnd, setIsBackend] = useState(false);
  const [isFullStack, setIsFullStack] = useState(true);

  const role = isFrontEnd ? "Front-End" : isBackEnd ? "Back-End" : isFullStack ? "Full-Stack": "No Role";
  const roleColors = 
    isFrontEnd ? "bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300" :
    isBackEnd ? "bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300" :
    isFullStack ? "bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-purple-900 dark:text-purple-300" : "";

  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-gray-100 py-8 mt-[100px]">
      <div className="relative flex items-start gap-4 bg-white p-6 shadow-lg rounded-xl w-full max-w-[600px] dark:bg-gray-800">
        <Image
          src={userData?.photoURL || "/default-profile.png"}
          className="w-12 h-12 rounded-full"
          alt="User profile image"
          width={48}
          height={48}
        />
        <div className="flex flex-col gap-2 w-full relative"> {/* Added relative here */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-base font-semibold text-gray-900 dark:text-white">
                {userData?.displayName}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">11:46</span>
            </div>
            <button
              onClick={() => setShowDropdown(!showDropDown)}
              className="text-black hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {showDropDown ? "Close" : "Open"}
            </button>
          </div>
    
          <p className="text-base text-gray-900 dark:text-white mt-4 border-2 p-2 rounded-b-md bg-gray-100">
            What's the difference between Next.js and React? 🤔 Let's find out!
          </p>
    
          <div className="group relative my-2">
            <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <button
                className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
              >
                <svg
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 18"
                  aria-hidden="true"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                  />
                </svg>
              </button>
            </div>
            <Image
              src="https://d2ms8rpfqc4h24.cloudfront.net/Comparison_Between_Next_JS_Vs_React_2ebcb34418.jpg"
              alt="Blog Image"
              width={550}
              height={350}
              className="rounded-lg"
            />
          </div>
    
          <div className="bottom-actions flex items-center justify-between mt-2">
            <svg
              onClick={() => setLiked(!liked)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill={liked ? "red" : "#BCCCDC"} 
              stroke="gray" 
              strokeWidth="1.5"
              className="cursor-pointer"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
            <span className={`${roleColors}`}>{role}</span>
          </div>
    
          {showDropDown && (
            <div className="dropdown-menu absolute top-8 right-0 bg-white dark:bg-gray-700 rounded-lg shadow-lg w-40 z-20">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                {["Comment", "Forward", "Report", "Delete"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div> 
  )
}

export default HomePageClient
