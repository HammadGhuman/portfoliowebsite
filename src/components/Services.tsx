"use client";
import React, { useState } from 'react'
import ServiceCard from './ServiceCard';
import WebAnimation from '../../public/webdevAnimationData.json'
import Mobile from '../../public/appdevAnimationData.json'

type Props = {}

function Services({}: Props) {
    const [active,setActive] = useState({
        service1:true,
        service2:false,
        service3:false
    });
  return (
    <div id="services" className='relative overflow-y-hidden'>  
        <ServiceCard key={1} color={'bg-primary'} heading={"Web Development"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id unde culpa vel fugit accusamus voluptate ab fugiat, nemo molestias explicabo!"} AnimationData={WebAnimation}/>
        <ServiceCard key={2} color={'bg-secondary'}heading={"App Development"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id unde culpa vel fugit accusamus voluptate ab fugiat, nemo molestias explicabo!"} AnimationData={Mobile}/>
        {/* <ServiceCard key={3} color={'bg-black'}heading={"Web Development"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id unde culpa vel fugit accusamus voluptate ab fugiat, nemo molestias explicabo!"} AnimationData={Mobile}/> */}
    </div>
  )
}

export default Services