
import PostCard from '@/components/postCard';
import HomePageClient from './home-page'

const HomePage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  return (
    <HomePageClient>
      <PostCard />
    </HomePageClient>  )
}

export default HomePage
