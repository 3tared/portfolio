/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbacksCard = ({
  testimonial,
  image,
  designation,
  name,
  company,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className=" bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-[48px] font-black text-white">&quot;</p>
      <div className="mt-1">
        <p className=" capitalize tracking-wider text-white text-[18px]">
          {testimonial}
        </p>
        <div className="mt-7 flex justify-between items-center gap1">
          <div className="flex-1 flex flex-col ">
            <p className="text-white text-[16px] font-medium">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What Others Say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbacksCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
