import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-gray-900 mt-10'>
      <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
        <div className='grid mb-8 lg:grid-cols-6'>
          <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
            {/* Category 1 */}
            <div>
              <p className='font-medium tracking-wide text-purple-300'>Category</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>News</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>World</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>Games</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>References</a>
                </li>
              </ul>
              </div>
              {/* Category 2 */}
              <div>
              <p className='font-medium tracking-wide text-purple-300'>About</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>Web</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>eCommerce</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>Business</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>Entertainment</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>Portfolio</a>
                </li>
              </ul>
              </div>
              {/* Category 3 */}
              <div>
              <p className='font-medium tracking-wide text-purple-300'>Personalization</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>Media</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>Publication</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>Education</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>Politics</a>
                </li>
              </ul>
              </div>
              {/* Category 4 */}
              <div>
              <p className='font-medium tracking-wide text-purple-300'>Pages</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <Link to="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>Home</Link>
                </li>
                <li>
                  <Link to="/blogs" className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>Blogs</Link>
                </li>
                <li>
                  <Link to="/services" className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>Services</Link>
                </li>
                <li>
                  <Link to="/about" className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>About</Link>
                </li>
              </ul>
              </div>
          </div>
          {/* Category 5 */}
          <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
              <p className='font-medium tracking-wide text-purple-300'>Subscribe for updates</p>
              <form className='mt-4 flex flex-col md:flex-row'>
                <input type="email" id='email' className='flex-grow w-full h-12 px-4 mb-3 transiti duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' />
                <button type='sumbit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-purple-300 focus:outline-none border'>
                  Subscribe
                </button>
              </form>
              <p className='mt-4 text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipsicing ekit. Sunt nisicumque voluptas. Fuga optio aut saepe voluptas adipisci tempribus ducimus omnis explicabo consequuntur! Id dolores corrupti nemo? Ducimus, quidem odio?</p>
              </div>
        </div>

        <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
          <p className='text-sm text-gray-50'><span className='text-lg text-purple-300'>© </span>Copyright 2024 | All right reserved.</p>
          <div className='flex items-center mt-4 space-x-4 sm:m-0'>
            <a href="https://www.instagram.com/dtech.services?igsh=Y3VODJsN3oza2dy&utm_source=qr" className='text-gray-500 transition-all duration-300 hover:text-purple-400'><FaInstagram className='h-6 w-6'/></a>
            <a href="https://www.linkedin.com/in/davies-david-7a461a257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className='text-gray-500 transition-all duration-300 hover:text-purple-400'><FaLinkedin className='h-6 w-6'/></a>
            <a href="https://github.com/Dayveesptf" className='text-gray-500 transition-all duration-300 hover:text-purple-400'><FaGithub className='h-6 w-6'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer