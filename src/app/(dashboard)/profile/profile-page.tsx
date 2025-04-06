"use client"

import { useAuth } from "@/context/AuthContext"
import Image from "next/image";
import { useState } from "react";
import { createUserPost } from "@/actions/userPostActions";
import type { UserPost } from "@/actions/userPostActions";

const ProfilePageClient = () => {
  const {userData} = useAuth();
  const [userPost, setUserPost] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
 
  const handlePostSubmit = () => {
    const postData: UserPost = {
      userId: userData?.uid || "",
      userName: userData?.displayName || "",
      userImg: userData?.photoURL || "",
      postUserRole: "FullStack",
      postContent: userPost,
      postImageUrl: "",
      postCodeSnippet: "",
      postFeelings: ""
    }
    
    return createUserPost(postData);
  }

  return (
    <>
      <div className="profile-container flex flex-col items-center justify-center gap-2">
        <div className="relative">
          <Image 
            src={userData?.photoURL || "/images/defaultProfile.png"} 
            width={100}
            height={100}
            className="rounded-full border-2 border-gray-300 dark:border-gray-700" 
            alt="User profile image"
            priority
          />
          <span className="bottom-1 right-3 absolute w-4 h-4 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" title="Active now"></span>
        </div>  
        <div className="flex flex-col items-center justify-center text-base font-semibold text-white dark:text-white space-y-2">
          <p>{userData?.displayName}</p>
          <p className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 my-2 rounded-sm dark:bg-purple-900 dark:text-purple-300 text-center">FullStack</p>
        </div>
        <div className="create-post-container flex-col items-center justify-center gap-2 border-2 text-md p-8 font-light mt-4 w-[38rem] rounded-b-md">
          <div className="post-input flex justify-center space-x-2">
            <input
              type="text"
              placeholder="Write or upload dev related stuff to create a post."
              onChange={(e) => {
                setUserPost(e.target.value);
                setIsDisabled(e.target.value.trim() === "");
              }}
              className="border-2 border-gray-300 rounded-full p-3 w-[26rem] font-light text-md bg-gray-9 text-gray-200"  
            />
            <button
              disabled={isDisabled}
              onClick={handlePostSubmit} 
              className="bg-blue-700 py-3 w-[6rem] rounded-full hover:bg-blue-600 cursor-pointer font-semibold disabled:cursor-not-allowed"
            >
              Post
            </button>
          </div>
          <div className="post-options flex items-center justify-center space-x-8 mt-4">
            <span className="photo-upload border-2 p-2 cursor-pointer" title="Upload a photo">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </span>

            <span className="code-upload border-2 p-2 cursor-pointer" title="Upload a code snippet">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
            </span>

            <span className="emoji-upload border-2 p-2 cursor-pointer" title="Upload feelings">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
              </svg>
              </span>
          </div>

        </div>

        <div className="post-container">
          {/* <PostCard /> */}
        </div>
      </div>
    </>

  )
}

export default ProfilePageClient
