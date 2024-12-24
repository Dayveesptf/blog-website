import React from 'react'
import { FaAutoprefixer, FaCss3, FaDesktop, FaDiceD6, FaDrawPolygon, FaThumbsUp } from 'react-icons/fa'

const Services = () => {
  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 font-primary'>Our Services</h2>
      </div>
      <div className='w-full pt-20 pb-10'>
        <div className='w-40 m-auto mb-4'><h5 className='font-medium text-xl text-center text-purple-500'>Our Services</h5></div>
        <div className='w-80 m-auto mb-4'><h1 className='text-center text-3xl font-bold text-gray-800 tracking-widest'>What We Offer</h1></div>
        <div className='w-[70%] md:w-[50%] lg:w-[50%] m-auto mb-4'><p className='text-center text-gray-700 font-light'>Lorem ipsum dolor sit amet consectetur adipsicing ekit. Sunt nisicumque voluptas. Lorem Sunt terens ajsi hodor tibler</p></div>
      </div>
      <div>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mb-10 w-[90%] m-auto'>
          <div className='p-5 shadow-lg shadow-purple-300 rounded cursor-pointer'>
            <div className='w-10 h-10'><FaAutoprefixer className='w-full h-full text-purple-600'/></div>
            <div><h1 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>Refreshing ideas</h1></div>
            <div><p className='mb-2  text-purple-950'>We enjoy working with discerning clients, people who desire quality, service, integrity and aesthetics</p></div>
          </div>
          <div className='p-5 shadow-lg shadow-purple-300 rounded cursor-pointer'>
            <div className='w-10 h-10'><FaCss3 className='w-full h-full text-purple-600'/></div>
            <div><h1 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>Based on Tailwind CSS</h1></div>
            <div><p className='mb-2  text-purple-950'>We enjoy working with discerning clients, people who desire quality, service, integrity and aesthetics</p></div>
          </div>
          <div className='p-5 shadow-lg shadow-purple-300 rounded cursor-pointer'>
            <div className='w-10 h-10'><FaDiceD6 className='w-full h-full text-purple-600'/></div>
            <div><h1 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>Infinite Possibilities</h1></div>
            <div><p className='mb-2  text-purple-950'>We enjoy working with discerning clients, people who desire quality, service, integrity and aesthetics</p></div>
          </div>
          <div className='p-5 shadow-lg shadow-purple-300 rounded cursor-pointer'>
            <div className='w-10 h-10'><FaDesktop className='w-full h-full text-purple-600'/></div>
            <div><h1 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>Speed Optimized</h1></div>
            <div><p className='mb-2  text-purple-950'>We enjoy working with discerning clients, people who desire quality, service, integrity and aesthetics</p></div>
          </div>
          <div className='p-5 shadow-lg shadow-purple-300 rounded cursor-pointer'>
            <div className='w-10 h-10'><FaDrawPolygon className='w-full h-full text-purple-600'/></div>
            <div><h1 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>Personalisation</h1></div>
            <div><p className='mb-2  text-purple-950'>We enjoy working with discerning clients, people who desire quality, service, integrity and aesthetics</p></div>
          </div>
          <div className='p-5 shadow-lg shadow-purple-300 rounded cursor-pointer'>
            <div className='w-10 h-10'><FaThumbsUp className='w-full h-full text-purple-600'/></div>
            <div><h1 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>Regular Updates</h1></div>
            <div><p className='mb-2  text-purple-950'>We enjoy working with discerning clients, people who desire quality, service, integrity and aesthetics</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services