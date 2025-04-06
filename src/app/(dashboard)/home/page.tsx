
import PostCard from '@/components/postCard';
import HomePageClient from './home-page'
import { fetchUserPosts } from '@/actions/userPostActions';

const HomePage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  return (
    <main className="flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl mb-8">Today's posts from developers in your guild.</h1>
      <PostCard />
    </main>
  )
}

export default HomePage
