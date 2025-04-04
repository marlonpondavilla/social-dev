
const HomePageClient = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4 text-white">
      <h1 className="text-4xl">Today's posts from developers in your guild.</h1>
      {children}
    </main>
  )
}

export default HomePageClient
