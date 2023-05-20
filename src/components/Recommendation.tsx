import React from 'react';
import Image from 'next/image';
import hr from '../../public/hr.webp';
type Props = {}

const Recommendation = (props: Props) => {
  return (
    <div className='px-[10vw] py-[10vh] flex flex-col items-center justify-between bg-recommendation bg-no-repeat bg-cover'>
      <div className='flex flex-row space-x-10 mb-10 items-center justify-center'>
        <div className='border-y-2 border-white w-64 h-0 lg:block hidden'></div>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-center lg:text-5xl text-4xl font-bold text-white'>Recommendations</h1>
        </div>
        <div className='border-y-2 border-white w-64 h-0 lg:block hidden'></div>
      </div>
          <div className='grid grid-cols-1 lg:grid-cols-3  gap-4'>
            <div className='bg-white'>
            <iframe src="http://www.youtube.com/embed/W7qWa52k-nE" className='w-full' height="200" allowFullScreen></iframe>
            <div className='px-3 mt-2'>
            <Image width={20} height={20} src={hr} alt="img" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas?</p>
            </div>
            </div>
            <div className='bg-white'>
            <iframe src="http://www.youtube.com/embed/W7qWa52k-nE" className='w-full' height="200" allowFullScreen></iframe>
            <div className='px-3 mt-2'>
            <Image width={20} height={20} src={hr} alt="img" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas?</p>
            </div>
            </div>
            <div className='bg-white'>
            <iframe src="http://www.youtube.com/embed/W7qWa52k-nE" className='w-full' height="200" allowFullScreen></iframe>
            <div className='flex flex-col px-3 mt-2 py-2'>
            <Image width={20} height={20} src={hr} alt="img" />
              <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas?</p>
              </div>

            </div>
            </div>
            <div className='bg-white'>
            <iframe src="http://www.youtube.com/embed/W7qWa52k-nE" className='w-full' height="200" allowFullScreen></iframe>
            <div className='px-3 mt-2'>
            <Image width={20} height={20} src={hr} alt="img" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas?</p>
            </div>
            </div>
            <div className='bg-white'>
            <iframe src="http://www.youtube.com/embed/W7qWa52k-nE" className='w-full' height="200" allowFullScreen></iframe>
            <div className='px-3 mt-2'>
            <Image width={20} height={20} src={hr} alt="img" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas?</p>
            </div>
            </div>
            <div className='bg-white'>
            <iframe src="http://www.youtube.com/embed/W7qWa52k-nE" className='w-full' height="200" allowFullScreen></iframe>
            <div className='px-3 mt-2'>
            <Image width={20} height={20} src={hr} alt="img" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas?</p>
            </div>
            </div>
          </div>
    </div>
  )
}

export default Recommendation