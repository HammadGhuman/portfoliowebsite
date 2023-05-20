import React, { useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Pic1 from "../../public/projectPic1.jpeg";
import Pic2 from "../../public/projectPic2.jpeg";
import Pic3 from "../../public/projectPic3.jpeg";
import ProjectCard from "./ProjectCard";
type Props = {};

const Project3 = (props: Props) => {
  const slides = [1,2,3,4]; 
  const [current,setCurrent] = useState(2);
  return (
  <>
      <h1 className="text-5xl my-16 font-bold text-center">Our Projects</h1>
      <div className="flex items-center justify-center">
      <motion.div 
        className="carousel rounded-box lg:mx-28"
      >
        {slides.map((item,index)=>(
          <ProjectCard id={item} key={index} pic={Pic1} />
        ))}
      </motion.div>
      </div>
      <div className="flex items-center justify-center my-10 space-x-10">
      <a href={`#slide${current}`} className="hover:bg-primary outline outline-primary flex items-center justify-center btn-circle" onClick={()=>{
        if(current === 2){
          setCurrent(1);
        }else if (current === 4)
        {
          setCurrent(2);
        }else{
          setCurrent(current-1);
        }
      }}>❮</a> 
      <a href={`#slide${current}`} className="hover:bg-primary outline outline-primary flex items-center justify-center btn-circle" onClick={()=>{
        if(current === slides.length){
          setCurrent(1);
        }else if (current === 1){
          setCurrent(current + 2);
        }else{
          setCurrent(current+1);
        }
      }}>❯</a>
      </div>
      </>
  );
};

export default Project3;
