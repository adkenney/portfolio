import Image from 'next/image';
import Link from 'next/link';
import gitHubIcon from '../../assets/icons/icons8-github.svg';
import ExternalIcon from '../../assets/icons/icons8-external-icon.svg';
export default function ProjectView({
  name,
  description,
  image,
  githubLink,
  liveLink,
  tools,
}) {
  return (
    <div className="relative flex flex-col gap-3 bg-light-navy p-2 rounded-lg drop-shadow-lg md:p-4 lg:p-6">
      <h3 className="text-isabelline">{name}</h3>
      <Image src={image} alt={name} className="rounded-md" />
      <p>{description}</p>
      <div>
        <ul className="flex gap-2 text-aggie-gold text-sm">
          {tools.map(tool => {
            return <li key={tool}>{tool}</li>;
          })}
        </ul>
      </div>
      <div className="project-links">
        <Link
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Look at the source code here"
        >
          <Image src={gitHubIcon} alt="" />
        </Link>
        <Link
          href={liveLink}
          target="_blank"
          rel="noreferrer"
          aria-label="See the live site here"
        >
          <Image src={ExternalIcon} alt="" />
        </Link>
      </div>
    </div>
  );
}
