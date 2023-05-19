"use client";
import Image from "next/image";
import React, { Dispatch, useState } from "react";
import logo from "../../public/logo.png";
import Hamburger from "../../public/hamburger.png";
import Close from "../../public/Close.png";
// import Link from "next/link";
import { Link, animateScroll as scroll } from "react-scroll";

type Props = {
  open:boolean,
  setOpen:Dispatch<React.SetStateAction<boolean>>
};

export default function Navbar({open,setOpen}: Props) {
  
  return (
    <div className="sticky top-0 bg-gradient-to-r from-[#DF4848] to-[#4400a6]">
      <nav className="px-8 flex bg-gray-100 lg:bg-transparent lg:flex-row flex-col lg:items-center items-start justify-between text-black py-3">
        {/* Logo Section */}
        <div className="flex flex-row justify-between w-full lg:w-auto items-center space-x-3 ">
          <div className="flex flex-row justify-between items-center space-x-3">
          <div>
          <Image width={128} height={128} src={logo} alt="logo"  />
          </div>
          </div>
          <div className="h-[24px] w-[24px]" onClick={()=>setOpen(!open)}>
            {open ? <Image className="lg:hidden" src={Close} alt="Close Icon" /> : <Image className="lg:hidden" src={Hamburger} alt="Close Icon" />}
          </div>
        </div>
        {/* Links */}
        {/* Home-->Services-->Projects-->Recommendations-->Our Story-->Contact us */}
       {( <><div className={`flex lg:flex-row lg:space-x-10 ${!open && "hidden lg:flex"} flex-col space-y-5 lg:space-y-0 lg:my-0 my-10  w-full lg:w-auto items-center font-semibold`}>
          <Link
            className="hover:text-primary cursor-pointer transition-colors text-white text-center py-3 rounded-xl w-full lg:w-auto duration-300"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Us
          </Link>
          <Link
            className="hover:text-primary cursor-pointer transition-colors text-white text-center py-3 rounded-xl w-full lg:w-auto duration-300"
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Services
          </Link>
          <Link
            className="hover:text-primary cursor-pointer transition-colors text-white text-center py-3 rounded-xl w-full lg:w-auto duration-300"
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="hover:text-primary cursor-pointer transition-colors text-white text-center py-3 rounded-xl w-full lg:w-auto duration-300"
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Recommendations
          </Link>
          <Link
            className="hover:text-primary cursor-pointer transition-colors text-white text-center py-3 rounded-xl w-full lg:w-auto duration-300"
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >
            Our Story
          </Link>
        </div>

        <Link
         activeClass="active"
         to="services"
         spy={true}
         smooth={true}
         offset={-70}
         duration={800}
          className={`${!open && "hidden lg:flex"} px-4 py-3 outline outline-2 lg:outline-white lg:bg-transparent  lg:w-auto  w-full text-center lg:text-white rounded-md font-bold hover:bg-primary bg-white hover:text-white hover:outline-none text-red-950  outline-red-950 transition-colors duration-300`}
          href={"#"}
        >
          Contact Us
        </Link>
        </>)}
      </nav>
    </div>
  );
}
