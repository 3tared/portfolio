import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

export const defaultOptions = {
  max: 45,
  scale: 1,
  speed: 450,
};

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className=" shadow-card rounded-[20px] p-[1px] w-full green-pink-gradient"
      >
        <div
          // eslint-disable-next-line react/no-unknown-property
          options={defaultOptions}
          className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h2 className="font-bold text-center text-white text-[20px]">
            {title}
          </h2>
        </div>
      </motion.div>
    </Tilt>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OverView.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className=" leading-[30px] capitalize mt-4 text-[17px] text-secondary max-w-3xl"
      >
        I&apos;m a skilled software developer with experience in JavaScript, and
        expertise in frameworks like React, Next.js, and Three.js. I&apos;m a
        quick learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
        Let&apos;s work together to bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, 'about');
