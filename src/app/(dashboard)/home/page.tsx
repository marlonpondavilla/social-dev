"use client"
import React, { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import Image from 'next/image'

const HomePageClient = () => {
  const {userData} = useAuth()
  const [showDropDown, setShowDropdown] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="flex items-start gap-2.5 bg-red-400">
        <Image
          src={userData?.photoURL || "/default-profile.png"}
          className="w-8 h-8 rounded-full"
          alt="User profile image"
          width={32}
          height={32}
        />
        <div className="flex flex-col gap-1">
          <div className="flex flex-col w-full max-w-[326px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">  
                {userData?.displayName}
              </span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
            </div>
            <p className="text-sm font-normal text-gray-900 dark:text-white">
              This is the new office ✨
            </p>
            <div className="group relative my-2.5">
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
                src="https://media.istockphoto.com/id/1141421616/photo/this-office-space-is-filled-with-productivity.jpg?s=612x612&w=0&k=20&c=ka6rGPcVkhjC2cG-ICEQaE7mzufJ253bngJPahvBlCg="
                alt="Blog Image"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div className="bottom-actions flex items-center justify-between">
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              <svg
                onClick={() => setLiked(!liked)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="25"
                height="24"
                fill={liked ? "red" : "#BCCCDC"} 
                stroke="gray" 
                strokeWidth="1.5"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              </span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Just now</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowDropdown(!showDropDown)}
          className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
          type="button"
        >
          {/* <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 4 15"
            aria-hidden="true"
          >
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg> */} {showDropDown ? "Close" : "Open"}
        </button>
        <div
        id="dropdownDots"
        className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-40 dark:bg-gray-700 dark:divide-gray-600"
        >
          {showDropDown && (
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
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePageClient
