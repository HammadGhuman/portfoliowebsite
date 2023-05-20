'use client';
import Image from 'next/image';
import Navbar from '@/components/Navbar'
import About from '@/components/About';
import Services from '@/components/Services';
import ContactUs from '@/components/ContactUs';
import { useState,useRef } from 'react';
import Project3 from '@/components/Project3';
import Recommendation from '@/components/Recommendation';
import Lottie,{LottieRefCurrentProps} from 'lottie-react';
import AnimationData from '../../public/webdevAnimationData.json';
import Story from '@/components/Story';

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open,setOpen] = useState(false);
  return (
   <div className="">
    {/* <main className="h-screen md:bg-hero-pattern-desktop bg-hero-pattern-mobile bg-no-repeat bg-cover"> */}
    <main className="min-h-screen bg-gradient-to-l  from-[#DF4848] to-[#4400a6]">
    <Navbar open={open} setOpen={setOpen}/>
      <div className='flex items-center justify-center px-4 lg:flex-row  flex-col'>
        {!open && (<div className='flex flex-col justify-start items-start text-red-950 mt-20  '>
        <p className="lg:text-7xl text-4xl font-bold max-w-3xl text-start text-white">We are a customer-first software development team offering quality solutions in best value</p>
        {/* <h1 className='text-2xl text-white font-bold outline hover:outline-none outline-2 mt-10 hover:bg-[#da4848] outline-white rounded-full px-5 py-1'>Contact Us</h1> */}
       <button className="text-xl px-8 py-3 mb-6 hover:bg-black hover:text-white hover:outline-none outline text-white outline-white rounded-3xl mt-16 transition-colors duration-300">Contact Us</button>
      </div>)}
      <div className='lg:max-w-[500px] max-w-[300px]'>
        <Lottie animationData={AnimationData}/>
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
    <Story/>
    <ContactUs/>

   </div>
  )
}
