import React from 'react'
import aboutImg from '../../assets/aboutImg.jpg'
import { FaNewspaper, FaUser } from 'react-icons/fa'

const About = () => {
  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 font-primary'>About Us</h2>
      </div>
      <div>
        <div className='flex w-[90%] m-auto justify-between gap-5 items-center mt-20 mb-20'>
          <div className='w-[50%] lg:w-[40%] rounded-lg'><img className='rounded-lg' src={aboutImg} alt="" /></div>
          <div className='w-[50%] lg:w-[60%] lg:pl-[5%]'>
            <div><h5 className='text-sm font-light text-purple-500 mb-2 md:text-xl lg:text-xl'>Who we are</h5></div>
            <div className='lg:w-[85%]'><h1 className='text-sm font-bold mb-[-10%] md:mb-[-5%] lg:mb-2 md:text-3xl lg:text-4xl'>We provide high quality Articles and Blogs</h1></div>
            <div><p className='text-[11px] lg:w-[85%] md:text-[13px]  lg:text-[17px] mt-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipsicing ekit. Sunt nisicumque voluptas. Fuga optio aut saepe voluptas adipisci tempribus ducimus omnis explicabo consequuntur! Id dolores corrupti nemo? Ducimus, quidem odio?</p></div> <br />
            <div><p className='text-[11px] lg:w-[85%] md:text-[13px] mt-[-13%] lg:mt-0 lg:text-[17px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipsicing ekit. Sunt nisicumque voluptas. Fuga optio aut saepe voluptas adipisci tempribus ducimus omnis explicabo consequuntur! Id dolores corrupti nemo? Ducimus, quidem odio?</p></div>
            </div>
        </div>
      </div>
      <h1 className='ml-[5%] text-xl md:text-2xl lg:text-4xl pt-0 md:pt-10 lg:pt-20 author-header'>Top Authors</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8 mb-10 mt-10 w-[92%] ml-[4%]'>
        <div className='p-5 shadow-lg shadow-purple-300 rounded cursor-pointer hover:bg-purple-100 inside-box'>
          <div className='w-[60px] h-[60px] m-auto border rounded-full bg-purple-500'><FaUser className='w-4/6 h-4/6 m-auto mt-2 text-white'/></div>
          <div className='w-[50%] m-auto mt-4'><h1 className='text-center text-xl tracking-normal'>Adrio David</h1></div>
          <div className='w-[50%] m-auto mt-2'><h3 className='text-center text-[12px] text-gray-600'>Director of Operations</h3></div>
          <div className='flex items-center gap-1 m-auto justify-center text-gray-600 font-light mt-2'><FaNewspaper/> 12 Article Published</div>
        </div>
        <div className='p-5 shadow-lg shadow-purple-300 rounded cursor-pointer hover:bg-purple-100 inside-box'>
          <div className='w-[60px] h-[60px] m-auto border rounded-full bg-purple-500'><FaUser className='w-4/6 h-4/6 m-auto mt-2 text-white'/></div>
          <div className='w-[50%] m-auto mt-4'><h1 className='text-center text-xl tracking-normal'>Trent Arnold</h1></div>
          <div className='w-[50%] m-auto mt-2'><h3 className='text-center text-[12px] text-gray-600'>Content Writer</h3></div>
          <div className='flex items-center gap-1 m-auto justify-center text-gray-600 font-light mt-2'><FaNewspaper/> 8 Articles Published</div>
        </div>
        <div className='p-5 shadow-lg shadow-purple-300 rounded cursor-pointer hover:bg-purple-100 inside-box'>
          <div className='w-[60px] h-[60px] m-auto border rounded-full bg-purple-500'><FaUser className='w-4/6 h-4/6 m-auto mt-2 text-white'/></div>
          <div className='w-[50%] m-auto mt-4'><h1 className='text-center text-xl tracking-normal'>Ibou Konate</h1></div>
          <div className='w-[50%] m-auto mt-2'><h3 className='text-center text-[12px] text-gray-600'>Head of Marketing</h3></div>
          <div className='flex items-center gap-1 m-auto justify-center text-gray-600 font-light mt-2'><FaNewspaper/> 5 Articles Published</div>
        </div>
        <div className='p-5 shadow-lg shadow-purple-300 rounded cursor-pointer hover:bg-purple-100 inside-box'>
          <div className='w-[60px] h-[60px] m-auto border rounded-full bg-purple-500'><FaUser className='w-4/6 h-4/6 m-auto mt-2 text-white'/></div>
          <div className='w-[50%] m-auto mt-4'><h1 className='text-center text-xl tracking-normal'>Curtis Jones</h1></div>
          <div className='w-[50%] m-auto mt-2'><h3 className='text-center text-[12px] text-gray-600'>Head of Marketing</h3></div>
          <div className='flex items-center gap-1 m-auto justify-center text-gray-600 font-light mt-2'><FaNewspaper/> 5 Articles Published</div>
        </div>
      </div>
    </div>  
    )
}

export default About