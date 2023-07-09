import { _TEAM } from '../../assets/jpeg'

const Banner = () => {
  return (
    <>
      <div className='md:h-[500px] h-auto overflow-hidden'>
        <img className=' object-cover w-[100%]' src={_TEAM.img} alt={ _TEAM.alt } />
      </div>
    </>
  )
}

export default Banner