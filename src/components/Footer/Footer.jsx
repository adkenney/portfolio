import Image from 'next/image';
import gitHubIcon from '../../assets/icons/icons8-github.svg';
import linkedinIcon from '../../assets/icons/icons8-linkedin.svg';

export default function Footer() {
  const currDate = new Date();
  return (
    <footer>
      <div>
        <ul className="social-links">
          <li>
            <a href="https://github.com/adkenney" target="_blank">
              <Image src={gitHubIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/arkellkenney" target="_blank">
              <Image src={linkedinIcon} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <p className="text-xs text-center">
        &copy;{` Arkell Kenney ${currDate.getFullYear()}. All Rights Reserved.`}
      </p>
    </footer>
  );
}
