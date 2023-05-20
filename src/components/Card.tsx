"use client";
import React from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
type Props = {
    cardBg:any,
    Word1:string,
    Word2:string,
    Word3:string,
    para:string
};

const Card = ({cardBg,Word1,Word2,Word3,para}: Props) => {
  return (
    <motion.div className="w-[350px] h-[500px] relative rounded-xl text-red-950 shadow-lg shadow-primary">
      <motion.div initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:3}} className="mt-10 flex items-center justify-center">
        <Image src={cardBg} alt="CardBg" height={200} width={250} />
      </motion.div>
      <motion.h1 initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:3}}  className="text-2xl mt-5 font-semibold text-center px-4">
        {Word1} <span className="line-through">{Word2}</span>{" "}
        <span className="text-primary">{Word3}</span>
      </motion.h1>
      <motion.p initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:3}}  className="mt-8 font-medium px-4 pb-10">
        {para}
      </motion.p>
    </motion.div>
  );
};

export default Card;
