import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const typingEffectRef = useRef(null);

  useEffect(() => {
    if (!typingEffectRef.current) {
      typingEffectRef.current = new Typed('.multiText', {
        strings: [
          'Front-End Developer',
          'React.js Developer',
          'Next.js Developer',
          'Web Developer',
        ],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        startDelay: 1000,
        smartBackspace: true,
      });
    }
  }, []);

  return (
    <section className=" relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I&apos;m{' '}
            <span className="text-[#915eff]">Mohamed Tarek</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I&apos;m a{' '}
            <span className="text-[#915eff] multiText">
              Front-End Developer
            </span>{' '}
            , I Develop Web Applications ,<br className="sm:block hidden" />{' '}
            Using React.js & Next.js.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className=" absolute xs:bottom-7 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className=" w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className=" w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
