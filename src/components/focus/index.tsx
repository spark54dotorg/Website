import React from 'react'
import { _AI, _AI_FULL, _AR_FULL, _CYBER, _CYBER_FULL, _GREEN_PILL, _ORANGE_PILL, _SLAB, _VR, _YELLOW_PILL } from '../../assets/svgs'

const Focus = () => {
  return (
   <section className='flex relative my-20'>


    <div className='bg-[#D76A03] min-w-[25%] max-w-[50%] absolute h-[100%] md:flex hidden'></div>

    <div className='h-auto flex  items-center justify-center w-[1280px] mx-auto'>
    <div className='flex md:flex-row flex-col gap-2 w-full'>
      <div className='relative flex'>
     
        
        <div className='bg-[#D76A03] flex justify-center items-center rounded-e-[80px] p-[50px] '>
          <h1 className='md:text-[34px] text-[24px] font-semibold text-white'>
              We are focused on <br></br>
              3 technologies
          </h1>
        </div>
      </div>

      <div className='flex'>

        <div className='relative '>
          <img src={_CYBER_FULL.img} alt={_CYBER_FULL.alt}/>
          <h2 className='mx-auto text-center'>Cyber security</h2>
        </div>

        <div className='relative'>
          <img src={_AI_FULL.img} alt={_AI_FULL.alt}/>
          <h2 className='mx-auto text-center'>Artificial Intelligence</h2>
        </div>

        <div className='relative'>
          <img src={_AR_FULL.img} alt={_AR_FULL.alt}/>
          <h2 className='mx-auto text-center'>AR/VR</h2>
        </div>


      </div>


    </div>
   </div>
   </section>
  )
}

export default Focus