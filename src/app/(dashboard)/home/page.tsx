
import PostCard from '@/components/postCard';
import HomePageClient from './home-page'
import { fetchUserPosts } from '@/actions/userPostActions';

const HomePage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  return (
    <HomePageClient>
      <PostCard />
    </HomePageClient>  )
}

export default HomePage
