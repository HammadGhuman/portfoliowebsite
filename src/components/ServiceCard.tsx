"use client";
import React from "react";
import Image from "next/image";
import bg from "../../public/Serviceblob.svg";
import TechStackButton from "./TechStackButton";
import Lottie from 'lottie-react';
type Props = {
  AnimationData:any
  heading: any;
  text: any;
  color:any;
};

const ServiceCard = ({ AnimationData, heading,text,color }: Props) => {
  console.log(`bg-${color}`)
  return (

    <div className={`flex flex-col lg:flex-row justify-evenly lg:mx-28 my-5 py-10 ${color} hover:bg-gradient-to-tr hover:from-primary hover:to-[#4400a6] transition-all duration-300 rounded-lg`}>
      <div className="flex flex-col space-y-10 pl-10 text-white">
        <h1 className="text-4xl">{heading}</h1>
        <p className="max-w-lg">
    {text}
        </p>
        <div className="grid grid-flow-row grid-cols-3 max-w-sm gap-3">
          <TechStackButton techName="ReactJS" />
          <TechStackButton techName="NodeJS" />
          <TechStackButton techName="TailwindCss" />
          <TechStackButton techName="Typescript" />
        </div>
      </div>
        <Lottie className="max-w-[300px] max-h-[300px] self-center" loop={false}  animationData={AnimationData}/>
    </div>
  );
};

export default ServiceCard;
