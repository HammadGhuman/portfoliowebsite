import React from 'react'
import TypeScript from '../../public/typescript.png';
import NextJS from '../../public/nextjs-icon.svg';
import Image, { StaticImageData } from 'next/image'
import TypeLogo from '../../public/typescript.png';
type Props = {
  id:number
  pic : StaticImageData
}

const ProjectCard = (props: Props) => {
  return (
    <div id={`slide${props.id}`} className="carousel-item lg:w-1/2 w-full h-full mr-6 group shadow-xl">
    {/* <div className="group-hover:hidden block">
      <Image src={props.pic} alt="pic" />
    </div> */}
    <div className="group-hover:block">
      <div className="flex flex-col px-4 py-4 space-y-10 bg-gray-100  w-full">
        <h1 className="text-3xl">Project Name</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis similique, quam eveniet, rerum quaerat quas deserunt voluptatibus, dolorem a eos doloribus aliquid suscipit. Aperiam illum praesentium reprehenderit debitis officia sequi! Repudiandae in vitae optio nisi, aut explicabo aliquam sint reiciendis!</p>
        <div className="flex flex-col space-y-3">
          <h1 className="text-2xl">Tech Stack</h1>
          <div className="flex flex-row space-x-5">
            <Image width={50} height={50} src={TypeLogo} alt="logo" />
            <Image width={50} height={50} src={TypeLogo} alt="logo" />
            <Image width={50} height={50} src={TypeLogo} alt="logo" />
            <Image width={50} height={50} src={TypeLogo} alt="logo" />
          </div>
          <h1 className='self-end mr-3 hover:text-primary text-lg transition-colors duration-300 cursor-pointer'>Learn More ❯</h1>
        </div>
      </div>
    </div></div>
      
  )
}

export default ProjectCard