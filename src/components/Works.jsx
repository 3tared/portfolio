/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { projects } from '../constants';
import { defaultOptions } from './About';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_url,
  icon,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, '0.75')}>
      <Tilt
        options={defaultOptions}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="h-[230px] relative w-full">
          <img
            src={image}
            alt={name}
            className="w-full rounded-2xl h-full object-cover"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="h-10 w-10 black-gradient cursor-pointer rounded-full flex justify-center items-center"
            >
              <img
                src={github}
                alt="github"
                className=" w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(project_url, '_blank')}
              className="h-10 w-10 black-gradient cursor-pointer rounded-full flex justify-center items-center ml-1"
            >
              <img
                src={icon}
                alt="cryptoc"
                className=" w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`${tag.color} text-[14px]`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', '0.1', '1')}
          className="mt-3 text-[17px] text-secondary leading-[30px] max-w-3xl capitalize"
        >
          I have worked on a variety of personal and professional projects in
          this year. I am always looking for new opportunities to work with
          great people.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
