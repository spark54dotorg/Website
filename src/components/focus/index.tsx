import { _AI, _CYBER, _VR,  } from '../../assets/svgs'

const Focus = () => {
  return (
   <section className='flex relative my-20'>


    <div className='h-auto flex  items-center justify-center w-[1280px] max-w-[90%] mx-auto'>
    <div className='gap-2 w-full'>
      <div className='relative flex'>
     
        
        <div className='flex justify-center items-center rounded-e-[80px] mx-auto'>
          <h1 className='md:text-[60px] text-[35px] font-semibold leading-tigh text-center'>
              We are focused on <br></br>
              3 technologies
          </h1>
        </div>
      </div>

      <div className='flex md:flex-row flex-col gap-10 justify-center mt-10'>

        <div className='relative w-[350px] h-[350px] bg-[#8EA604] flex items-center justify-center rounded-md'>
          <img src={_CYBER.img} alt={_CYBER.alt}/>
          <h2 className='mx-auto text-center absolute bottom-5 text-xl text-white font-semibold'>Cyber security</h2>
        </div>

        <div className='relative w-[350px] h-[350px] bg-[#F5BB00] flex items-center justify-center rounded-md'>
          <img src={_AI.img} alt={_AI.alt}/>
          <h2 className='mx-auto text-center absolute bottom-5 text-xl text-white font-semibold'>Artificial Intelligence</h2>
        </div>

        <div className='relative w-[350px] h-[350px] bg-[#D76A03] flex items-center justify-center rounded-md'>
          <img src={_VR.img} alt={_VR.alt}/>
          <h2 className='mx-auto text-center absolute bottom-5 text-xl text-white font-semibold'>AR/VR</h2>
        </div>


      </div>


    </div>
   </div>
   </section>
  )
}

export default Focus