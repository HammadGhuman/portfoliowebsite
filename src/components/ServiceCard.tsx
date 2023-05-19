"use client";
import React from 'react'
import Image from 'next/image'
import bg from '../../public/Serviceblob.svg'
type Props = {
    cardImg:any
    text:any
}

const ServiceCard = ({cardImg,text}: Props) => {
  return (
    <div className='relative px-12 pb-44 flex flex-row justify-between rounded-br-2xl rounded-bl-2xl  text-white font-medium'>
            <div className='max-w-[50%] text-xl font-semibold flex items-center justify-between' >
                <p>{text}</p> 
            </div>
            <div className='max-w-[50%]'>
                <Image src={cardImg} alt="webdev png" className='w-[250px] h-[250px]'/>
            </div>
    </div>
  )
}

export default ServiceCard