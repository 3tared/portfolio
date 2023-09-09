import { Link } from 'react-router-dom';
import { logo } from '../assets';
import { icons } from '../constants';

function Footer() {
  return (
    <footer className="bg-primary shadow dark:bg-gray-900 m-4 mb-0">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to={'/'}
            className="flex items-center mb-4 sm:mb-0"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} className="h-8 mr-3" alt="mohamedtarek Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Mohamed Tarek
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {icons.map((icon) => (
              <li key={icon.name} className="mr-4 hover:underline md:mr-6 ">
                <a href={icon.url} target="_blank" rel="noreferrer">
                  <img
                    src={icon.icon}
                    alt={icon.name}
                    className="w-[26px] h-[26px] object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy;{new Date().getFullYear()}{' '}
          <Link
            to={'/'}
            className="hover:underline"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Mohamed Tarek™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
