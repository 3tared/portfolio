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
  frontendIntro,
  nextjs,
  typescript,
  facebook,
  instgram,
  linkedin,
  githuub,
  carhub,
  carlogo,
  crudlogo,
  crud,
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
    name: 'TypeScript',
    icon: typescript,
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
    name: 'Next Js',
    icon: nextjs,
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
    title: 'Introduction to Front-End Development',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'September 2023',
    grade: '98%',
    image: frontendIntro,
    url: 'https://www.coursera.org/account/accomplishments/certificate/JS9BW9QP9SUG',
  },
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
  {
    testimonial:
      'A Professional Front-end Developer And Iam Greatful To Work With This Man Who Care About His Job More Than His Time',
    name: 'Seif Haitham',
    designation: 'Senior',
    company: 'Mobile Dev',
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
    project_url: 'https://aisumm.vercel.app/',
  },
  {
    name: 'Car Hub',
    description:
      'Find , Book , Rent A Car — Quickly And Easily , Streamline Your Car Rental Experience With Our Effortless Booking Process , Join Now And Rent Your Car!',
    tags: [
      {
        name: 'TypeScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Next Js',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carhub,
    icon: carlogo,
    source_code_link: 'https://github.com/3tared/cars_app',
    project_url: 'https://carshub-app.vercel.app/',
  },
  {
    name: 'Crud App',
    description:
      'Basic Crud App For Creat & Edit & Read & Remove Products With A huge Functionalities By Using Tailwind Css And Headless Ui And TypeScript',
    tags: [
      {
        name: 'React TypeScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Headless Ui',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: crud,
    icon: crudlogo,
    source_code_link: 'https://github.com/3tared/crud',
    project_url: 'https://crudwebapplication.vercel.app/',
  },
];

const icons = [
  {
    name: 'facebook',
    icon: facebook,
    url: 'https://www.facebook.com/3taredtv/',
  },
  {
    name: 'instgram',
    icon: instgram,
    url: 'https://www.instagram.com/mohamed_tarekk21/',
  },
  {
    name: 'linkedin',
    icon: linkedin,
    url: 'https://www.linkedin.com/in/mohamed-tarek-2a8759248/',
  },
  {
    name: 'github',
    icon: githuub,
    url: 'https://github.com/3tared',
  },
];

export { services, technologies, experiences, testimonials, projects, icons };
