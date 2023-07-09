import React from 'react'
import { _GIRL_CODE, _MAN, _SPARK } from '../../assets/jpeg'
import { _ARC, _SWIRL, _WAVE } from '../../assets/svgs'

const About = () => {
  return (
    <>
      <div className='md:w-[1280px] w-[90%] mx-auto md:my-40 my-20 flex items-center md:flex-row flex-col'>

        {/* left side */}
        <div className='md:w-[50%] w-full'>
          <h1 className='md:text-[34px] text-[24px] font-semibold'>About</h1>
          <p className='mt-10 md:w-[80%] w-full leading-loose'>We are a social enterprise based in Africa’s largest talent and commercial market, Lagos, Nigeria. We believe that Africa holds great prospects for contributing to the development and deployment of emerging technologies if our talent and domestic organisations can be exposed to these technologies experientially.</p>
        </div>

        {/* right side */}
        <div className='flex md:flex-row flex-col justify-end md:w-[50%] w-full md:mt-auto mt-20'>
          {/* images */}
          <div className='flex md:gap-10 gap-5 w-full'>
            {/* first image */}
            <span className='relative w-1/2'>
              <div className='md:h-[510px] w-full md:w-[300px]  overflow-hidden rounded-xl'>
                <img className="h-[100%] object-cover" src={_GIRL_CODE.img} alt={_GIRL_CODE.alt}/>
              </div>

              <img className='absolute -top-4 -left-14' src={_WAVE.img} alt={_WAVE.alt}/>
              <img className='absolute bottom-16 -left-10' src={_ARC.img} alt={_ARC.alt}/>
            </span>

            {/* second image */}
            <span className='relative w-1/2'>
              <div className='md:h-[510px] w-full md:w-[300px] overflow-hidden -translate-y-10 rounded-xl'>
                <img className="h-[100%] object-cover" src={_SPARK.img} alt={_SPARK.alt}/>
              </div>
              <img className='absolute -top-14 -right-2' src={_SWIRL.img} alt={_SWIRL.alt}/>
            </span>

          </div>
        </div>
      </div>
    </>
  )
}

export default About