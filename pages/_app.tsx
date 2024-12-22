// pages/_app.tsx
import { AppProps } from 'next/app';

import '../styles/globals.css';  // Make sure your Tailwind CSS is imported
import Navbar from './components/Navbar';
import Footer from './components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
