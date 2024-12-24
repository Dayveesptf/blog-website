import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaUser, FaClock } from "react-icons/fa6";
import Sidebar from '../../components/Sidebar/Sidebar';

const SingleBlog = () => {
    const data = useLoaderData();
    const {title, image, category, author, published_date, reading_time, content} = data[0];
  return (
    <div>
        <div className='py-20 bg-black text-center text-white px-4'>
            <h2 className='text-4xl lg:text-5xl leading-snug font-bold mb-0 font-primary pt-10'>Blog Details</h2>
        </div>

        {/* Details */}
        <div className='mx-auto my-12 flex flex-col md:flex-row gap-12 px-10'>
            <div className='lg:w-3/4 mx-auto'>
            <div>
                <img src={image} alt="" className='w-full mx-auto rounded'/>
            </div>
            <h2 className='text-3xl font-bold mb-4 text-gray-700 mt-8'>{title}</h2>
            <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2 text-purple-500'/>{author} <span className='ml-3 mr-3'>|</span>  {published_date}</p>
            <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2 text-purple-500'/>{reading_time}</p>
            <p className='text-base text-gray-500 mb-6'>{content}</p>
            <div className='text-base text-gray-500 mb-6'>
                <p>Lorem ipsum dolor sit amet consectetur adipsicing ekit. Sunt nisicumque voluptas. Fuga optio aut saepe voluptas adipisci tempribus ducimus omnis explicabo consequuntur! Id dolores corrupti nemo? Ducimus, quidem odio?</p> <br />
                <p>Lorem ipsum dolor sit amet consectetur adipsicing ekit. Sunt nisicumque voluptas. Fuga optio aut saepe voluptas adipisci tempribus ducimus omnis explicabo consequuntur! Id dolores corrupti nemo? Ducimus, quidem odio?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipsicing ekit. Sunt nisicumque voluptas. Fuga optio aut saepe voluptas adipisci tempribus ducimus omnis explicabo consequuntur! Id dolores corrupti nemo? Ducimus, quidem odio?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipsicing ekit. Sunt nisicumque voluptas. Fuga optio aut saepe voluptas adipisci tempribus ducimus omnis explicabo consequuntur! Id dolores corrupti nemo? Ducimus, quidem odio?</p> <br />
                <p>Lorem ipsum dolor sit amet consectetur adipsicing ekit. Sunt nisicumque voluptas. Fuga optio aut saepe voluptas adipisci tempribus ducimus omnis explicabo consequuntur! Id dolores corrupti nemo? Ducimus, quidem odio?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipsicing ekit. Sunt nisicumque voluptas. Fuga optio aut saepe voluptas adipisci tempribus ducimus omnis explicabo consequuntur! Id dolores corrupti nemo? Ducimus, quidem odio?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipsicing ekit. Sunt nisicumque voluptas. Fuga optio aut saepe voluptas adipisci tempribus ducimus omnis explicabo consequuntur! Id dolores corrupti nemo? Ducimus, quidem odio?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipsicing ekit. Sunt nisicumque voluptas. Fuga optio aut saepe voluptas adipisci tempribus ducimus omnis explicabo consequuntur! Id dolores corrupti nemo? Ducimus, quidem odio?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipsicing ekit. Sunt nisicumque voluptas. Fuga optio aut saepe voluptas adipisci tempribus ducimus omnis explicabo consequuntur! Id dolores corrupti nemo? Ducimus, quidem odio?</p> <br />
                <p>Lorem ipsum dolor sit amet consectetur adipsicing ekit. Sunt nisicumque voluptas. Fuga optio aut saepe voluptas adipisci tempribus ducimus omnis explicabo consequuntur! Id dolores corrupti nemo? Ducimus, quidem odio?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipsicing ekit. Sunt nisicumque voluptas. Fuga optio aut saepe voluptas adipisci tempribus ducimus omnis explicabo consequuntur! Id dolores corrupti nemo? Ducimus, quidem odio?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipsicing ekit. Sunt nisicumque voluptas. Fuga optio aut saepe voluptas adipisci tempribus ducimus omnis explicabo consequuntur! Id dolores corrupti nemo? Ducimus, quidem odio?</p>
            </div>
            </div>
            <div className='lg:w-1/2'>
                <Sidebar/>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog