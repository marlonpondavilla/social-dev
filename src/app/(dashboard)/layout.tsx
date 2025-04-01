import Navbar from "@/components/navbar"

export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}){
  return(
    <div className="bg-gray-300">
      <Navbar/>
      {children}
    </div>
  )
}