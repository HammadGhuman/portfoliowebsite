'use client';
import React from 'react'
import cardBg from '../../public/understand.svg'
import communicate from '../../public/communicate.svg'
import deliver from '../../public/deliver.svg'
import Card from './Card';
type Props = {}

function About({}: Props) {
  return (
    <div id="about" className='relative'>
<div className='bg-wave w-full h-48 bg-no-repeat bg-cover absolute'></div>
        <div className='flex flex-col items-center pt-20'>
            <h1 className='max-w-xl text-center text-4xl font-bold text-black'>What do we mean when we say <span className='text-primary' >Customer First</span></h1>
            <div className='flex lg:flex-row flex-col  lg:space-x-10 lg:space-y-0 space-y-10 mt-10'>
                <Card Word1='We' Word2='hear' Word3='Understand' para="We are empathetic to business needs and attentive to pain points of our customers and not afraid to put in the extra effort to provide best value" cardBg={cardBg}/>
                <Card cardBg={communicate} Word1={'We'} Word2={'Communicate'} Word3={'Engage'} para={'We ask the right questions and welcome all stakeholders to get involved throughout the software development process to increase efficiency'} />
                <Card cardBg={deliver} Word1={'We'} Word2={'Build'} Word3={'Deliver'} para={"We craft digital solutions with utmost detail while equally focusing on the customer journey so that it's not just a product that is delivered but a lasting customer experience"} />
            </div>  
        </div>
        <div className='bg-wave2 w-full h-48 bg-no-repeat bg-cover'></div>
    </div>

  )
}

export default About