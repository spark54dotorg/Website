import { useState } from 'react';
import { _LOGO } from "../../assets/svgs"
import { NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react'
import { Outlet } from 'react-router-dom';
import { PrimaryButton } from '../button';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
      <>
        <nav className="md:flex block items-center justify-between md:h-[100px] h-auto mx-auto md:w-[1280px] w-full bg-[#FFFAF5]">

        <div className="brand flex justify-between items-center md:h-full h-[80px] md:px-auto md:pl-auto pl-5">
          <img src={_LOGO.img} alt={_LOGO.alt} width='80'/>
          <span className='md:hidden flex'><Hamburger toggled={isOpen} toggle={setOpen} /></span>
        </div>

        <div className={`${isOpen ? 'h-full' : 'md:h-full h-0'} overflow-hidden`}>
          <div className="flex list-none gap-2 md:h-full h-auto  md:flex-row flex-col items-center">
            <NavLink to="/" className={ ({ isActive }) => isActive ? " text-[#D76A03] border-b-4 border-[#D76A03] h-[100px] px-8 flex items-center" : " h-[100px] px-8 flex items-center"}>Home</NavLink>
            {/* <NavLink to="about" className={ ({ isActive }) => isActive ? " text-[#D76A03] border-b-4 border-[#D76A03] h-[100px] px-8 flex items-center" : " h-[100px] px-8 flex items-center"}>About</NavLink> */}
            <NavLink to="mailto:hello@spark54.org" className={ ({ isActive }) => isActive ? " text-[#D76A03] border-b-4 border-[#D76A03] h-[100px] px-8 flex items-center" : " h-[100px] px-8 flex items-center"}>Email us</NavLink>
            {/* <NavLink to="/more" className={ ({ isActive }) => isActive ? " text-[#D76A03] border-b-4 border-[#D76A03] h-[100px] px-8 flex items-center" : " h-[100px] px-8 flex items-center"}>More</NavLink> */}

            <PrimaryButton> Register for GENAi </PrimaryButton>
          </div>
        </div>
        </nav>

        <Outlet />

        
      </>
  )
}

export default Navbar