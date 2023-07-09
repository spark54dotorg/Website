import Data from './programs.data';

const Programs = () => {
  return (
    <>
      <div className='flex md:flex-row flex-col h-auto items-center my-20 md:w-[1280px] w-[90%] mx-auto'>
          {
            Data.map((item, index) => (
              <div key={index} className=' md:w-1/3 w-full text-center flex flex-col items-center gap-5 md:px-16 px-auto my-5'>
                <img src={item.icon.img} alt={item.icon.alt} />
                <h1 className='text-[20px] font-semibold'>{item.title}</h1>
                <p>{item.content}</p>
              </div>
            ))
          }
      </div>
    </>
  )
}

export default Programs