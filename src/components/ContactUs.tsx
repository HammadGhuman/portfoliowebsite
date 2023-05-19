import Image from 'next/image'
import React from 'react'
import LeftCard2 from '../../public/LeftCard3.svg';
import hr from '../../public/hr.webp';
type Props = {}

const ContactUs = (props: Props) => {
  return (
    <div className='flex lg:flex-row flex-col font-mono max-h-screen overflow-y-hidden text-gray-100'>
      {/* Left Card */}
      <div className='flex flex-col lg:max-w-[600px] bg-contactUsLeft bg-cover bg-no-repeat px-10 pt-10'>
        <h1 className='text-center text-5xl font-bold'>Contact US</h1>
        <div className='mt-10 text-xl flex flex-col space-y-10'>
          <p className='font-light font-mono'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas eveniet numquam beatae magnam architecto tempore ipsa sunt itaque neque molestiae fuga error, aliquam consectetur voluptate nesciunt repellendus reiciendis aperiam non impedit ducimus voluptatum debitis laboriosam, aspernatur in. Atque ab quis excepturi itaque magni rerum dicta sapiente aliquid adipisci, accusantium dolorem?</p>
          <div>
          <p className='text-xl'>Email US <span className='text-white font-bold underline hover:text-blue-500 cursor-pointer transition-colors duration-300'>codemate@gmail.com</span></p>
          <p className='text-2xl font-bold'>Or</p>
          <p className='text-xl'>Call Us on <span className='text-white font-bold underline hover:text-blue-500 cursor-pointer transition-colors duration-300'>+9233312389022</span></p>
          </div>
          <div className='flex flex-row space-x-3'>
            <Image src={hr} alt="HrImage" width={80} height={80} className='rounded-full'></Image>
            <div className="flex flex-col space-y-0 items-start justify-center">
              <h1 className='text-xl font-bold'>Hr Team Lead</h1>
              <p className='text-white font-bold underline hover:text-blue-500 cursor-pointer transition-colors duration-300'>hr@codemate.hr.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* Right Card */}
      <div className='py-10 w-full'>
        <h1 className='text-4xl text-center font-bold text-black'>Lets Discuss Your Project</h1>
        <div className='px-20 mt-20' >
          <form className='flex flex-col space-y-16 items-start' action="">
            <input type="text" className="outline-none border-b-2 border-b-primary text-xl py-3 px-3 w-full text-primary placeholder:text-black" placeholder='Name' />
            <input type="text" className="outline-none border-b-2 border-b-primary text-xl py-3 px-3 w-full text-primary placeholder:text-black" placeholder='Email' />
            <input type="text" className="outline-none border-b-2 border-b-primary text-xl py-3 px-3 w-full text-primary placeholder:text-black" placeholder='Contact Number' />
            <input type="text" className="outline-none border-b-2 border-b-primary text-xl py-3 px-3 w-full text-primary placeholder:text-black" placeholder='Project Description' />
            <button className='ml-auto px-12 rounded-sm hover:bg-red-700 text-xl font-semibold py-3 bg-primary'>Submit</button>
          </form>
        </div>
      </div>
    </div>  
  )
}

export default ContactUs