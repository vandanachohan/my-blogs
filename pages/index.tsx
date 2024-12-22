import Link from 'next/link';

const posts = [
  { id: '1', title: 'My First Post' },
  { id: '2', title: 'Learning Next.js' },
  { id: '3', title: 'React State in Action' },
];

export default function PostsList() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-red-500">
      <h1 className="text-4xl font-bold mb-6">Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="text-center">
            <Link href={`/posts/${post.id}`}>
              <span className="hover:text-white text-2xl font-semibold">
                {post.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
