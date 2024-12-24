import React from 'react'
import Banner from '../../components/Banner/Banner'
import BlogPage from '../../components/BlogPage/BlogPage'

const Home = () => {
  return (
    <div>
      <Banner />
      
      <div className='max-w-7xl mx-auto'>
        <BlogPage/>
      </div>
    </div>
  )
}

export default Home