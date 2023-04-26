import Footer from '@/components/Footer/Footer';
import Layout from '@/components/Layout/Layout';
import Navbar from '@/components/Navbar/Navbar';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Layout>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </main>
  );
}
