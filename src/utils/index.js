import entertainmentImg from '../assets/images/entertainment.png';
import dictionaryImg from '../assets/images/dictionary.png';
import githubUserSearchImg from '../assets/images/github-user-search.png';

export const navLinks = [
  {
    name: 'About',
    href: '#about',
    key: 1,
  },
  {
    name: 'Projects',
    href: '#projects',
    key: 3,
  },
  {
    name: 'Contact',
    href: '#contact',
    key: 4,
  },
];

export const projects = [
  {
    name: 'Entertainment App',
    description:
      'Search or browse detailed information on popular, trending, and upcoming movie and TV shows.',
    image: entertainmentImg,
    github: 'https://github.com/adkenney/entertainment-web-app',
    live: 'https://adkenney-entertainment.netlify.app/',
    tools: ['Next.js', 'Tailwind CSS', 'TMDb API'],
  },
  {
    name: 'Dictionary',
    description:
      'Dictionary search site equipped with a theme, font toggler, and pronunciation audio.',
    image: dictionaryImg,
    github: 'https://github.com/adkenney/dictionary-web-app',
    live: 'https://adkenney-dictionary-app.netlify.app/',
    tools: ['React', 'CSS Modules', 'Dictionary API'],
  },
  {
    name: 'GitHub User Search',
    description:
      'Displays basic profile information of a GitHub user using the GitHub API.',
    image: githubUserSearchImg,
    github: 'https://github.com/adkenney/github-user-search-app',
    live: 'https://adkenney-github-search.netlify.app',
    tools: ['React', 'CSS Modules', 'GitHub API'],
  },
];
