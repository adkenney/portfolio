import Image from 'next/image';
import cssIcon from '../../assets/icons/icons8-css3.svg';
import gitIcon from '../../assets/icons/icons8-git.svg';
import htmlIcon from '../../assets/icons/icons8-html-5.svg';
import jsIcon from '../../assets/icons/icons8-javascript.svg';
import nextIcon from '../../assets/icons/icons8-next.js.svg';
import reactIcon from '../../assets/icons/icons8-react-native.svg';
import tailwindIcon from '../../assets/icons/icons8-tailwind-css.svg';

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <ul className="skill-list">
        <li>
          <Image src={htmlIcon} alt="html" />
          <p>html</p>
        </li>
        <li>
          <Image src={cssIcon} alt="css" />
          <p>css</p>
        </li>
        <li>
          <Image src={jsIcon} alt="javascript" />
          <p>javascript</p>
        </li>
        <li>
          <Image src={reactIcon} alt="react" />
          <p>react</p>
        </li>
        <li>
          <Image src={nextIcon} alt="next" />
          <p>next.js</p>
        </li>
        <li>
          <Image src={tailwindIcon} alt="tailwind" />
          <p>tailwind</p>
        </li>
        <li>
          <Image src={gitIcon} alt="git" />
          <p>git</p>
        </li>
      </ul>
    </section>
  );
}
