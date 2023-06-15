import Head from 'next/head';
import { Inter } from 'next/font/google';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Arkell Kenney</title>
        <meta
          name="description"
          content="View my portfolio of work and learn more about my skills and experience. I am a web developer with a passion for creating user friendly webpages. My portfolio showcases implementation of mobile-first responsive design, sites working with API data, and other things. I am currently working with a variety of web development technologies such as, JavaScript, React, Next.js, and Tailwind CSS. If you are looking for a web developer with a love for learning and creating solutions, I would be honored to discuss your project with you. Contact me today to learn more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
