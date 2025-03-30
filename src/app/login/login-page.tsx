"use client"
import { MailOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  function alertMessage() {
    console.log("Login with Email")
    alert("Login with Email")
  }

  return (
    
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-center text-2xl">Login Now</h1>
      <Button 
        className="bg-blue-500 py-3 rounded-full hover:bg-blue-400 mt-4"
        onClick={alertMessage}
      >
        <MailOpen /> Login with Google
      </Button>
    </div>
  )

}
