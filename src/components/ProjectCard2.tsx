import Image, { StaticImageData } from 'next/image'
import TypeScript from '../../public/typescript.png';
import NextJS from '../../public/nextjs-icon.svg';
import React from 'react'

type Props = {
    pic:StaticImageData
}

const ProjectCard2 = (props: Props) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
    <figure className=''>
        <Image src={props.pic} alt=""/>
    </figure>
    <div className="card-body">
     <h2 className="card-title">Project 1</h2>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt inventore ducimus necessitatibus cumque quidem ipsum! Officiis illum voluptatum vero ea nesciunt esse in eius error debitis, tempore omnis qui asperiores similique voluptates fugiat consequatur dolores accusamus dolorum. Beatae, omnis ipsa.</p>
     <h3 className='font-bold'>Tech Stack</h3>
     <div className='flex flex-row space-x-4'>
            <Image className='mask mask-squircle' width={64} height={64} src={TypeScript} alt="typescript" />
            <Image className='mask mask-squircle' width={64} height={64} src={NextJS} alt="nextjs" />
            <Image className='mask mask-squircle' width={64} height={64} src={TypeScript} alt="typescript" />
    </div>  
    <div className="card-actions justify-end">
        <button className="btn btn-primary">View Project</button>
    </div>
  </div>
</div>
  )
}

export default ProjectCard2