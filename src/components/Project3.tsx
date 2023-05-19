import React from "react";
import Pic1 from '../../public/projectPic1.jpeg'
import Pic2 from '../../public/projectPic2.jpeg'
import Pic3 from '../../public/projectPic3.jpeg'
import ProjectCard2 from "./ProjectCard2";
type Props = {};

const Project3 = (props: Props) => {
  return (

<div className="flex flex-col space-y-10 py-10 items-center justify-center bg-base-100">
  <h1 className="text-5xl font-bold">Our Projects</h1>
  <div className="w-[70vw]">
    <ProjectCard2 pic={Pic1} />
  </div>
  <div className="w-[70vw]">
    <ProjectCard2 pic={Pic2} />
  </div>
  <div className="w-[70vw]">
    <ProjectCard2 pic={Pic3} />
  </div>
</div>

      );
};

export default Project3;
