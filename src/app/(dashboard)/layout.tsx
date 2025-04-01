import Navbar from "@/components/navbar"

export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}){
  return(
    <div className="bg-gray-800">
      <Navbar/>
      {children}
    </div>
  )
}