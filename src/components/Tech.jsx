/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { BallCanvas } from './canvas';
import { textVariant } from '../utils/motion';

// eslint-disable-next-line react-refresh/only-export-components
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((tech) => (
          <div className="w-27 h-27" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, '');
