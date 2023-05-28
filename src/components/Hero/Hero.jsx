import Image from 'next/image';
import profileImg from '../../assets/images/Image.png';
export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center">
      <div className="relative w-2/4 border rounded-full border-aggie-gold overflow-hidden">
        <Image src={profileImg} alt="Arkell Kenney" />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1>Hi, I'm</h1>
          <h2>Arkell Kenney</h2>
        </div>
        <p>
          Passionate web developer driven to create exceptional web experiences
        </p>
      </div>
      <a
        className="cta-button self-start mt-5"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </section>
  );
}
