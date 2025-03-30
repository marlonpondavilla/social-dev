import { MailOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"


export default function GoogleButton() {
  const {signInWithGoogle} = useAuth();

  async function handleLogin() {
    try{
      await signInWithGoogle();
      alert("Login successful")
    } catch (error) {
      console.error("Login failed", error)
      alert("Login failed")
    }
  }

  return (
    <Button 
        className="bg-blue-500 py-3 rounded-full hover:bg-blue-400 mt-4"
        onClick={handleLogin}
      >
        <MailOpen /> Login with Google
      </Button>
  )
}