import React from 'react';
import RecommendationCard from './RecommendationCard';
type Props = {}

const Recommendation = (props: Props) => {
  return (
    <div className='px-[5vw] py-[10vh] flex flex-col items-center justify-between bg-recommendation bg-no-repeat bg-contain'>
      <div className='flex flex-row space-x-10 mb-10 items-center justify-center'>
        <div className='border-y-2 border-black w-64 h-0 lg:block hidden'></div>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-center text-5xl font-bold'>Recommendations</h1>
          <span className='font-light'>swipe to view recomendations</span>
        </div>
        <div className='border-y-2 border-black w-64 h-0 lg:block hidden'></div>
      </div>
      <div className="carousel lg:max-w-5xl w-full"> 
       <RecommendationCard/>
       <RecommendationCard/>
       <RecommendationCard/>
      </div>
    </div>
  )
}

export default Recommendation