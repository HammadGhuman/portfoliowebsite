"use client";
import React, { useState } from 'react'
import webDev from '../../public/webdev.png';
import ServiceBlob from '../../public/test.svg';
import Image from 'next/image';
import ServiceCard from './ServiceCard';
type Props = {}

function Services({}: Props) {
    const [active,setActive] = useState({
        service1:true,
        service2:false,
        service3:false
    });
  return (
    <div id="services" className='relative overflow-y-hidden'>
        <div className='absolute -z-10'>
            <Image width={"1600"} src={ServiceBlob} alt={"servicesBG"}/>
        </div>
        <div className='pt-10'>
            <h1 className='text-5xl font-bold text-center text-white'>Our Services</h1>
        </div>
        <div className='max-w-4xl mx-auto'>
        <div className='flex flex-row space-x-0 justify-center items-center mt-16'>
            <button onClick={()=>setActive({
                service1:true,
                service2:false,
                service3:false
            })} className={`px-12 py-3 text-2xl text-white font-semibold border-t-8 rounded-tl-2xl ${active.service1 ? 'border-t-[#c52369] bg-primary' : 'border-t-[#001220] bg-[#001220]'}`}>
                <h1>Product Engineering and Prototyping</h1>
            </button>
            <button onClick={()=>{setActive({
                service1:false,
                service2:true,
                service3:false
            })}} className={`px-12 py-3 text-2xl text-white font-semibold border-t-8 rounded-none  ${active.service2 ? 'border-t-[#c52369] bg-primary' : 'border-t-[#001220] bg-[#001220]'}`}>
                <h1>Web App Development</h1>
            </button>
            <button onClick={()=>setActive({
                service1:false,
                service2:false,
                service3:true
            })} className={`px-12 py-3 text-2xl text-white font-semibold border-t-8 rounded-tr-2xl ${active.service3 ? 'border-t-[#c52369] bg-primary' : 'border-t-[#001220] bg-[#001220]'}`}>
                <h1>Mobile app development</h1>
            </button>
        </div>
        {active.service1 && <ServiceCard cardImg={webDev} text={"We understand that startups can be tricky and building a product is hardly ever a straightforward task. Having experience of working with Silicon Valley and funded startups, our team will not shy away from revisions and reiterations and will go all the way to convert your idea into reality!"} />}
        {active.service2 && <ServiceCard cardImg={webDev} text={"We develop customized web experiences and provide end-to-end web development services starting from basic portfolio websites to fully interactive and dynamic web applications including e-commerce platforms, Content Management Systems etc."} />}
        {active.service3 && <ServiceCard cardImg={webDev} text={"We provide a range of custom mobile app development services including native and cross-platform applications with both simple and complex functionalities but with the all important features of stability and scale!"} />}
        </div>
    </div>
  )
}

export default Services