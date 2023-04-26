import Image from 'next/image';
import profileImg from '../../assets/Image.png';
export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center">
      <div>
        <Image src={profileImg} width={150} height={150} alt="Arkell Kenney" />
      </div>
      <div>
        <h1>Hi, I'm</h1>
        <h2>Arkell Kenney</h2>
        <p>
          Passionate frontend developer driven to create exceptional web
          experiences
        </p>
        <button>Resume</button>
      </div>
    </section>
  );
}
