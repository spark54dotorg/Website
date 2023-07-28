import { _ARC, _ARROW_RIGHT, _SWIRL, _SWOOSH, _WAVE } from '../../assets/svgs';
import {PrimaryButton, SecondaryButton} from '../button';
import { _HEADER_PHOTO, _MAN } from '../../assets/jpeg';
import { motion } from 'framer-motion';
import { CHILD_ANIMATION, PARENT_ANIMATION } from '../../utils';


const Header = () => {
  return (
    <div className='flex md:w-[1280px] w-[90%] mx-auto  h-auto items-center md:flex-row flex-col md:my-[220px] my-20'>

      {/* left side of design */}
      <motion.div className=''
        variants={PARENT_ANIMATION( { staggerChild: 0.4})}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={CHILD_ANIMATION()} className='md:text-[60px] text-[35px] font-semibold leading-tight relative'>African talent for <br></br>emerging technologies
          <span className='absolute -bottom-8 right-20'><img src={_SWOOSH.img} alt={_SWOOSH.alt}/></span>
        </motion.h1>
        <p className='md:w-[60%] w-[100%] leading-loose mt-10'>Spark54 provides knowledge, community and opportunity for African talent in emerging technologies.</p>

        <motion.div className='flex gap-5 mt-10 md:flex-row flex-col'>
          <motion.span variants={CHILD_ANIMATION({ delayChild: 0.2})}><PrimaryButton> <a className="appearance-none hover:text-white" href="mailto:hello@spark54.org"> Contact us  </a></PrimaryButton></motion.span>
          <motion.span variants={CHILD_ANIMATION({ delayChild: 0.3 })}><SecondaryButton> Register for GEN-Ai Event <img className='-rotate-45' src={_ARROW_RIGHT.img} alt={_ARROW_RIGHT.alt}/></SecondaryButton></motion.span>
        </motion.div>
      </motion.div>

      {/* right side of design */}
      <motion.div 
        variants={PARENT_ANIMATION({delayChild: 0.6})}
        initial="hidden"
        animate="visible"
        className='flex items-center justify-center md:w-[50%] w-[100%] md:my-auto my-10 md:pl-20 pl-auto  md:overflow-visible overflow-hidden '>
        <div className='relative w-full'>
          <motion.div variants={CHILD_ANIMATION({delayChild: 1.8, staggerChild: 2})} className='md:w-[100%] w-[100%] md:h-[400px] h-[400px] overflow-hidden origin-center flex items-center justify-end rounded-lg relative'>
            <img className='object-cover w-[100%] origin-center' src={_HEADER_PHOTO.img} alt={_HEADER_PHOTO.alt} />
          </motion.div>

            {/* icons go here */}
            <motion.img variants={CHILD_ANIMATION({delayChild: 10, staggerChild: 10})} className='absolute -top-4 -left-10' src={_WAVE.img} alt={_WAVE.alt}/>
            <motion.img variants={CHILD_ANIMATION()} className='absolute -top-12 -right-12' src={_SWIRL.img} alt={_SWIRL.alt}/>
            <motion.img className='absolute -left-10 bottom-14' src={_ARC.img} alt={_ARC.alt}/>
            {/* image goes here */}


        </div>
      </motion.div>


    </div>
  )
}

export default Header