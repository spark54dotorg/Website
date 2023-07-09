import { Link } from 'react-router-dom'
import { _TWITTER, _LINKEDIN } from '../../assets/svgs'
import { TeamShape } from './team.data'

const Member = ({twitter, linkedin, role, image, name }: TeamShape) => {
  return (
   
        <div className='w-[316px]'>
          <div className='h-[411px] w-[full] overflow-hidden rounded-lg'>
            <img className=' object-cover h-[100%]' src={image?.img} alt={image?.alt}/>
          </div>

          <div className='flex justify-between mt-5'>
            <span>
              <h3 className='text-[20px] font-semibold'>{name}</h3>
              <p className='text-[16px] text-[#FF6107]'>{role} </p>
            </span>

            <span className='flex gap-2'>
              <Link to={twitter}> <img src={_TWITTER.img} alt={_TWITTER.alt}/> </Link>
              <Link to={linkedin}> <img src={_LINKEDIN.img} alt={_LINKEDIN.alt}/> </Link>
            </span>
          </div>
        </div>
  )
}

export default Member