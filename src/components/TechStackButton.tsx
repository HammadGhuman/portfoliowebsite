import React from 'react'

type Props = {
    techName:string
}

const TechStackButton = ({techName}: Props) => {
  return (
    <p className='px-5 py-2 text-center hover:bg-slate-400 duration-300 transition-color cursor-pointer bg-slate-200 text-black rounded-lg'>
        {techName}
    </p>
  )
}

export default TechStackButton