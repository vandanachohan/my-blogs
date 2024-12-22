// pages/post/[id].tsx
import { useRouter } from 'next/router';
import Comments from '../components/comments';

// Simulated database for posts
const postContent: Record<string, { title: string; content: string }> = {
  '1': {
    title: 'My First Post',
    content: 'This is the full content of my first post. Welcome to my blog!',
  },
  '2': {
    title: 'Learning Next.js',
    content: 'Next.js makes building websites easy and fun! Here’s why...',
  },
  '3': {
    title: 'React State in Action',
    content: 'Using React state to manage data effectively is crucial in modern web development.',
  },
};

// This function gets called at build time to specify which pages to pre-render
export async function getStaticPaths() {
  // Get the list of post IDs from the simulated database
  const paths = Object.keys(postContent).map(id => ({
    params: { id },
  }));

  return {
    paths,
    fallback: true, // Set to true to use `router.isFallback` for pages not pre-rendered
  };
}

// This function fetches data for each post at build time
export async function getStaticProps({ params }: { params: { id: string } }) {
  const post = postContent[params.id];

  if (!post) {
    return { notFound: true }; // Handle 404 if the post doesn't exist
  }

  return {
    props: { post }, // Pass the post data as props to the page
  };
}

const Post = ({ post }: { post?: { title: string; content: string } }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>; // Show loading state while the page is being generated
  }

  if (!post) {
    return <div>Post not found!</div>; // Handle case when post is not found
  }

  return (
    <div className="p-6 bg-black text-white">
      <h1 className="text-2xl font-bold text-red-600">{post.title}</h1>
      <p className="mt-4">{post.content}</p>

      <Comments />
    </div>
  );
};

export default Post;
