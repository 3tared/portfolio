import {
  react,
  next,
  frontend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  meta,
  crypto,
  threejs,
  reactb,
  reacta,
  javas,
  htmlcss,
  bootstrap,
  userimg,
  aisummary,
  ailogo,
  crptoc,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Certificates',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React.js Developer',
    icon: react,
  },
  {
    title: 'Next.js Developer',
    icon: next,
  },
  {
    title: 'Front-End Developer',
    icon: frontend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Bootstrap CSS',
    icon: bootstrap,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'HTML and CSS in depth',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#383E56',
    date: 'April 2023',
    grade: '90.23%',
    image: htmlcss,
    url: 'https://www.coursera.org/account/accomplishments/certificate/66WLETV58P72',
  },
  {
    title: 'Programming with JavaScript',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'April 2023',
    grade: '95.33%',
    image: javas,
    url: 'https://www.coursera.org/account/accomplishments/certificate/5UYGX649WXEB',
  },
  {
    title: 'React Basics',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#383E56',
    date: 'August 2023',
    grade: '100%',
    image: reactb,
    url: 'https://www.coursera.org/account/accomplishments/certificate/Z6R6V4BNR85S',
  },
  {
    title: 'Advanced React',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'August 2023',
    grade: '84%',
    image: reacta,
    url: 'https://www.coursera.org/account/accomplishments/certificate/LSD6TRP2598K',
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Youssef Ahmed',
    designation: 'Senior',
    company: 'Backend Developer',
    image: userimg,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Mohamed Walid',
    designation: 'Senior',
    company: 'Data Scientist',
    image: userimg,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Youssef Aboelhmayed',
    designation: 'Senior',
    company: 'UI & UX Designer',
    image: userimg,
  },
  {
    testimonial:
      "he is a good developer and he can make a beautiful websites and he is so kind. I can't thank him enough!",
    name: 'Ahmed Ashraf',
    designation: 'Senior',
    company: 'Accountant',
    image: userimg,
  },
];

const projects = [
  {
    name: 'CryptoVerse',
    description:
      'Web-based platform that allows users to search, find, about any cryptocurrency, providing all the cryptos and news that you needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'rapidapi',
        color: 'green-text-gradient',
      },
      {
        name: 'antdesign',
        color: 'pink-text-gradient',
      },
    ],
    image: crypto,
    icon: crptoc,
    source_code_link: 'https://github.com/3tared/cryptoapp',
    project_url: 'https://cryptoapp-servicess.vercel.app/',
  },
  {
    name: 'Ai-Summary',
    description:
      'Simplify your reading with Summarize, an open-source article summarizer that transforms lengthy articles into clear andconcise summaries',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'rapidapi',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: aisummary,
    icon: ailogo,
    source_code_link: 'https://github.com/3tared/ai_summarizer',
    project_url: 'https://openaisummarizer.vercel.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
