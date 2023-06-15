import Image from 'next/image';
import profileImg from '../../assets/images/Image.png';
export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-4 mt-24 md:flex-row md:gap-8 lg:mt-32">
      <div className="relative border-2 rounded-full border-aggie-gold overflow-hidden max-w-[15em]">
        <Image src={profileImg} alt="Arkell Kenney" />
      </div>
      <div className="hero-heading">
        <div>
          <h1 className="text-xl md:text-2xl">Hi, I&apos;m</h1>
          <h2 className="text-3xl md:text-4xl">Arkell Kenney.</h2>
        </div>
        <p>I like to expand my brain with web development.</p>
        <a
          className="cta-button self-start"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
