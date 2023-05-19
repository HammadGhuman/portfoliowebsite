'use client';
import Image from 'next/image';
import Navbar from '@/components/Navbar'
import About from '@/components/About';
import Services from '@/components/Services';
import ContactUs from '@/components/ContactUs';
import { useState } from 'react';
import Projects from '@/components/Projects';
import Project2 from '@/components/Project2';
import Project3 from '@/components/Project3';
import Placeholder from '../../public/ProjectPlaceholder.png'
import Recommendation from '@/components/Recommendation';

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open,setOpen] = useState(false);
  return (
   <div className="">
    
    {/* <main className="h-screen md:bg-hero-pattern-desktop bg-hero-pattern-mobile bg-no-repeat bg-cover"> */}
    <main className="h-screen bg-gradient-to-r  from-[#DF4848] to-[#4400a6]">
    <Navbar open={open} setOpen={setOpen}/>
      <div className='flex items-center justify-center pr-[10vw]'>
        {!open && (<div className='flex flex-col justify-start items-start text-red-950 mt-20  '>
        <p className="text-7xl font-bold max-w-3xl text-start text-white">We prioritize customers, deliver innovative digital solutions through collaboration.</p>
        {/* <h1 className='text-2xl text-white font-bold outline hover:outline-none outline-2 mt-10 hover:bg-[#da4848] outline-white rounded-full px-5 py-1'>Contact Us</h1> */}
       <button className="text-xl px-8 py-3 hover:bg-black hover:text-white hover:outline-none outline text-white outline-white rounded-3xl mt-16 transition-colors duration-300">Contact Us</button>
      </div>)}
      <div>
        <Image width={400} height={400} src={Placeholder} alt="placehholder" />
      </div>
      </div>
      {/* <div className='absolute -z-10 top-0 w-screen'>
      <Image width="0"
    height="0"
    sizes="100vw"
    className="w-full h-auto" src={heroImage} alt="background"/>
      </div>     */}
    </main>
    <About/> 
    <Services/>
    <Project3/>
    {/* <Projects/> */}
    {/* <Project2 /> */}
    <Recommendation/>
    <ContactUs/>
   </div>
  )
}
