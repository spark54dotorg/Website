import { _EMAIL, _FACEBOOK, _INSTAGRAM, _LINKEDIN, _LOCATION, _LOGO, _PHONE, _TWITTER } from '../../assets/svgs'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
   <>
    <footer>
      <nav className=' flex md:w-[1280px] w-[90%] mx-auto gap-5 my-20 md:flex-row flex-col'>
        {/* about column */}
        <div className=' md:w-[30%] w-full'>
          <img src={_LOGO.img} alt={_LOGO.alt} width="100"/>
          {/* <p>Download the app by clicking the link below download the app by clicking the link below download the app by clicking the link below download the app by clicking the link below :</p> */}
        </div>

        {/* site column */}
        <div className='md:w-[17.5%] w-full'>
          <h3 className=' font-bold mb-8' >Site</h3>
            <ul>
              <li className=' leading-loose'><NavLink to='/'>Home</NavLink></li>
              <li className=' leading-loose'><NavLink to='/'>About us</NavLink></li>
              <li className=' leading-loose'><NavLink to='/'>Programs</NavLink></li>
              <li className=' leading-loose'><NavLink to='/'>Team</NavLink></li>
            </ul>
        </div>

        {/* Events column */}
        <div className='md:w-[17.5%] w-full'>
          <h3 className=' font-bold mb-8' >Events</h3>
            <ul>
              <li className=' leading-loose'><NavLink to='/'>GEN Ai</NavLink></li>
              <li className=' leading-loose'><NavLink to='/'>Spark Session</NavLink></li>
              <li className=' leading-loose'><NavLink to='/'>Twitter spaces</NavLink></li>
            </ul>
        </div>

        {/* Contact column */}
        <div className='md:w-[17.5%] w-full'>
          <h3 className=' font-bold mb-8' >Contact</h3>
            <ul>
              {/* <li className=' leading-loose flex gap-4'> <img src={_PHONE.img} alt={_PHONE.alt}/> <a href='tel()'>(406) 555-0120</a></li> */}
              <li className=' leading-loose flex gap-4'> <img src={_EMAIL.img} alt={_EMAIL.alt}/> <a href='mail-to()'>hello@spark54.org</a></li>
              {/* <li className=' leading-loose flex gap-4'> <img src={_LOCATION.img} alt={_LOCATION.alt}/> <span>2972 Westheimer Rd. Santa Ana, Illinois 85486 </span></li> */}
            </ul>
        </div>
        

        {/* Social media column */}
        <div className='md:w-[17.5%] w-full'>
          <h3 className=' font-bold mb-8' >Contact</h3>
            <Link to='/' target='_blank' className='inline-block'> <img src={_FACEBOOK.img} alt={_FACEBOOK.alt} width='40'/> </Link>
            <Link to='https://twitter.com/Spark54inc' target='_blank' className='inline-block'> <img src={_TWITTER.img} alt={_TWITTER.alt} width='40'/> </Link>
            <Link to='https://www.linkedin.com/company/afctinitiative/' target='_blank' className='inline-block'> <img src={_LINKEDIN.img} alt={_LINKEDIN.alt} width='40'/> </Link>
            <Link to='https://www.instagram.com/spark54inc/' target='_blank' className='inline-block'> <img src={_INSTAGRAM.img} alt={_INSTAGRAM.alt} width='40'/> </Link>
        </div>


      </nav>
    </footer>
   </>
  )
}

export default Footer