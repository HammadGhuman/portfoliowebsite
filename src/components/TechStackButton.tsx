import React from 'react'

type Props = {
    techName:string
}

const TechStackButton = ({techName}: Props) => {
  return (
    <p className='px-5 py-2 text-center to-[#48DFDF] bg-gradient-to-r from-[#62A600] rounded-lg'>
        {techName}
    </p>
  )
}

export default TechStackButton