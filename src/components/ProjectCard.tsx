import React from 'react'
import TypeScript from '../../public/typescript.png';
import NextJS from '../../public/nextjs-icon.svg';
import Image, { StaticImageData } from 'next/image'
type Props = {
  pic : StaticImageData
}

const ProjectCard = (props: Props) => {
  return (
    <div className='px-10 py-10 flex lg:flex-row flex-col lg:space-x-10 space-y-0 lg:sapce-y-10 max-w-[100vw] border-b-4 border-black shadow-xl'>
        <div className=' flex items-center justify-center'>
          <Image src={props.pic} alt="airbnb"/>
        </div>
        <div className='flex flex-col justify-center space-y-10 bg-primary  px-10 py-10'>
          {/* Title */}
          <h1 className='text-5xl font-semibold'>Project 1</h1>
          {/* Description */}
          <p className='font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum sunt error eaque, repellat, praesentium aut tenetur laudantium suscipit atque quam itaque rem exercitationem assumenda maxime? Ea explicabo distinctio culpa ex veritatis corporis eligendi deleniti eaque quae vel, laborum architecto? Ab.</p>

          {/* Tech Stack */}
         <div className='flex flex-col space-y-5'>
          <h1 className='font-bold text-lg'>Tech Stack</h1>
         <div className='flex flex-row space-x-4'>
            <Image className='mask mask-squircle' width={64} height={64} src={TypeScript} alt="typescript" />
            <Image className='mask mask-squircle' width={64} height={64} src={NextJS} alt="nextjs" />
            <Image className='mask mask-squircle' width={64} height={64} src={TypeScript} alt="typescript" />
          </div>  
         </div>
         <button className='bg-emerald-700 px-10 py-5 text-white font-bold w-48 self-end rounded-lg'>View Site </button>
        </div>
      </div>
      
  )
}

export default ProjectCard