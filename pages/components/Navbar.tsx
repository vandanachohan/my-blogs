// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-red-600">Vandana s Blog</h1>
        <div className="space-x-6">
          <Link href="/">
            <span className="text-red-500 hover:underline">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-red-500 hover:underline">About</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
