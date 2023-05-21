import React from 'react'

type Props = {
    techName:string
}

const TechStackButton = ({techName}: Props) => {
  return (
    <p className='px-5 py-2 text-center bg-slate-200 text-black rounded-lg'>
        {techName}
    </p>
  )
}

export default TechStackButton