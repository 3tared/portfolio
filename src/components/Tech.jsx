/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { BallCanvas } from './canvas';
import { textVariant } from '../utils/motion';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChanges = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChanges);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChanges);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {!isMobile
          ? technologies.map((tech) => (
              <div className={'w-28 h-28'} key={tech.name}>
                <BallCanvas icon={tech.icon} />
              </div>
            ))
          : technologies.map((tech) => (
              <div
                key={tech.name}
                className="w-28 h-28 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: 'rgb(44 34 97 / 35%)',
                }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="object-contain w-24 h-24 rounded-full"
                />
              </div>
            ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, '');
