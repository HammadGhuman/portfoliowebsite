"use client";
import React from "react";
import Image from 'next/image';
type Props = {
    cardBg:any,
    Word1:string,
    Word2:string,
    Word3:string,
    para:string
};

const Card = ({cardBg,Word1,Word2,Word3,para}: Props) => {
  return (
    <div className="w-[350px]  relative rounded-xl text-red-950 shadow-lg shadow-primary">
      <div className="mt-10 flex items-center justify-center">
        <Image src={cardBg} alt="CardBg" height={200} width={250} />
      </div>
      <h1 className="text-2xl mt-5 font-semibold text-center px-4">
        {Word1} <span className="line-through">{Word2}</span>{" "}
        <span className="text-primary">{Word3}</span>
      </h1>
      <p className="mt-8 font-medium px-4 pb-10">
        {para}
      </p>
    </div>
  );
};

export default Card;
