import Image from 'next/image';
import Link from 'next/link';
import gitHubIcon from '../../assets/icons/icons8-github.svg';
import linkedinIcon from '../../assets/icons/icons8-linkedin.svg';

export default function Footer() {
  const currDate = new Date();
  return (
    <footer>
      <div>
        <ul className="social-links">
          <li>
            <Link
              href="https://github.com/adkenney"
              target="_blank"
              aria-label="github profile"
            >
              <Image src={gitHubIcon} alt="" />
            </Link>
          </li>
          <li>
            <Link
              href="https://linkedin.com/in/arkellkenney"
              target="_blank"
              aria-label="linkedin profile"
            >
              <Image src={linkedinIcon} alt="" />
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-xs text-center mt-2">
        &copy;{` Arkell Kenney ${currDate.getFullYear()}. All Rights Reserved.`}
      </p>
    </footer>
  );
}
