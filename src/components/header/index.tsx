import { _ARC, _ARROW_RIGHT, _SWIRL, _SWOOSH, _WAVE } from '../../assets/svgs';
import {PrimaryButton, SecondaryButton} from '../button';
import { _HEADER_PHOTO, _MAN } from '../../assets/jpeg';

const Header = () => {
  return (
    <div className='flex md:w-[1280px] w-[90%] mx-auto  h-auto items-center md:flex-row flex-col md:my-[220px] my-20'>

      {/* left side of design */}
      <div className=''>
        <h1 className='md:text-[60px] text-[35px] font-semibold leading-tight relative'>African talent for <br></br>emerging technologies
          <span className='absolute -bottom-8 right-20'><img src={_SWOOSH.img} alt={_SWOOSH.alt}/></span>
        </h1>
        <p className='md:w-[60%] w-[100%] leading-loose mt-10'>Spark54 provides knowledge, community and opportunity for African talent in emerging technologies.</p>

        <div className='flex gap-5 mt-10 md:flex-row flex-col'>
          <PrimaryButton> Support us </PrimaryButton>
          <SecondaryButton> Register for GEN-Ai Event <img className='-rotate-45' src={_ARROW_RIGHT.img} alt={_ARROW_RIGHT.alt}/></SecondaryButton>
        </div>
      </div>

      {/* right side of design */}
      <div className='flex items-center justify-center md:w-[50%] w-[100%] md:my-auto my-10 md:pl-20 pl-auto  md:overflow-visible overflow-hidden '>
        <div className='relative w-full'>
          <div className='md:w-[100%] w-[100%] md:h-[400px] h-[400px] overflow-hidden origin-center flex items-center justify-end rounded-lg relative'>
            <img className='object-cover w-[100%] origin-center' src={_HEADER_PHOTO.img} alt={_HEADER_PHOTO.alt} />
          </div>

            {/* icons go here */}
            <img className='absolute -top-4 -left-10' src={_WAVE.img} alt={_WAVE.alt}/>
            <img className='absolute -top-12 -right-12' src={_SWIRL.img} alt={_SWIRL.alt}/>
            <img className='absolute -left-10 bottom-14' src={_ARC.img} alt={_ARC.alt}/>
            {/* image goes here */}


        </div>
      </div>


    </div>
  )
}

export default Header