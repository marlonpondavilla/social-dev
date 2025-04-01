
import HomePageClient from './home-page'

const HomePage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
  return (
    <HomePageClient />
  )
}

export default HomePage
