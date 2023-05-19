import React from 'react'
import ProjectCard from './ProjectCard';
import Pic1 from '../../public/projectPic1.jpeg'
import Pic2 from '../../public/projectPic2.jpeg'
import Pic3 from '../../public/projectPic3.jpeg'
type Props = {}

const Project2 = (props: Props) => {
  return (
    <div className="carousel carousel-end rounded-box">
  <div className="carousel-item">
    <ProjectCard pic={Pic1}/>
  </div> 
  <div className="carousel-item">
  <ProjectCard pic={Pic2}/>
  </div> 
  <div className="carousel-item">
  <ProjectCard pic={Pic3}/>
  </div> 
</div>
  )
}

export default Project2