import { useEffect, useState } from 'react'
import BlogCard from '../BlogCard/BlogCard';
import Pagination from '../Pagination/Pagination';
import Category from '../Category/Category';
import Sidebar from '../Sidebar/Sidebar';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12 // number of blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect (() => {
        async function fetchBlogs() {
            let url = `https://blogdata-six.vercel.app/api/blogs?page=${currentPage}&limit=${pageSize}`;

            //filter by category
            if (selectedCategory) {
                url += `&category=${selectedCategory}`
            }
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }

        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory])


    //page changing button
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }
  return (
    <div>
        {/* Categories */}
        <div>
            <Category onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
        </div>

        {/* blog cards section */}
        <div className='flex lg:flex gap-8' id='blog-area'>
            <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>

            {/* Side bar */}
            <div>
                <Sidebar/>
            </div>
        </div>

        { /* Pagination */}
        <div>
            <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />
        </div>
    </div>
  )
}

export default BlogPage