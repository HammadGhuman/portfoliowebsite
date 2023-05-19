import React from 'react'
import ProjectCard from './ProjectCard';
import Pic1 from '../../public/projectPic1.jpeg'
import Pic2 from '../../public/projectPic2.jpeg'
import Pic3 from '../../public/projectPic3.jpeg'
type Props = {}

const Projects = (props: Props) => {
  const title = [Pic1,Pic2,Pic3];

  return (
    <div className='flex flex-col items-center justify-center py-10'>
      <h1 className='text-center text-5xl pb-10 text-red-950 font-extrabold'>Projects</h1>
      <ProjectCard pic={Pic1} />
      <ProjectCard pic={Pic2} />
      <ProjectCard pic={Pic3} />
    </div>
  )
}

export default Projects