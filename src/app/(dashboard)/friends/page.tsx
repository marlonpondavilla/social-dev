
const FriendsPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-center text-4xl ">No friends yet</h1>
    </div>
  )
}

export default FriendsPage
