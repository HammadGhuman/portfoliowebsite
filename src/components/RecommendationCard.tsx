import React from 'react'
import Image from 'next/image'
import person from '../../public/hr.webp';
type Props = {}

const RecommendationCard = (props: Props) => {
  return (
    <div className='carousel-item px- w-full shadow-lg rounded-xl relative  bg-slate-200 flex lg:flex-row flex-col space-y-10 lg:space-y-0 items-center lg:space-x-10'>
    <div className="flex items-center justify-center">
        <Image className='mask mask-squircle' width={200} height={200} src={person} alt="person1" />
    </div>
  <p className='text-center lg:w-[900px] pb-10'><q className='text-xl font-light text-red-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magni tempore sequi placeat fuga sapiente tenetur? Fuga dolor, sapiente odit, harum voluptas corporis, in earum ab deserunt accusantium quis. Consectetur.</q></p>
  
</div>
  )
}

export default RecommendationCard