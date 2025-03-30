import Link from "next/link";

export default function Home() {

  return (
    <div className="button-container flex flex-col items-center justify-center h-screen gap-4">
      <Link href="/login">
        <button 
          className="bg-blue-500 py-3 w-[7rem] rounded-full hover:bg-blue-400">
          Go to Login
        </button>
      </Link>
      <Link href="/signup">
        <button 
          className="bg-green-500 py-3 w-[7rem] rounded-full hover:bg-green-400">
          Go to Signup
        </button>
      </Link>
    </div>
  );
}
