import Navbar from "@/components/navbar"

export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}){
  return(
    <div className="text-white">
      <Navbar/>
      <div className="pt-[10rem]">
        {children}
      </div>
    </div>
  )
}