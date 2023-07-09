
import Member from './member';
import People from './team.data';

const TeamMembers = () => {
  return (
    <div className='mb-40 md:w-[1280px] w-[90%] mx-auto'>
      <h1 className='text-[34px] text-center my-8'> Team </h1>
      <div className='flex gap-10 items-center justify-center md:flex-row flex-col'>
        {
          People.map( ({name, image, role, twitter, linkedin}, index) => (
            <Member 
              key={index} image={image} name={name} role={role} twitter={twitter} linkedin={linkedin}        
            />
          ))
        }
      </div>
    </div>
  )
}

export default TeamMembers