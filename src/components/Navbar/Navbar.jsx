import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
//fontawesome icons
import { FaBars, FaXmark } from "react-icons/fa6";
import Modal from '../Modal/Modal';
import { FaGithub, FaInstagram, FaLinkedin, FaUser } from 'react-icons/fa';
 const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [ isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    // navItems
    const navItems = [
        {path: "/", link: "Home"},
        {path: "/blogs", link: "Blog"},
        {path: "/services", link: "Services"},
        {path: "/about", link: "About"},
    ]

    //modal details
    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
        setIsLoggedIn(true); 
        console.log(isLoggedIn);
    }
    return (
     <header className='bg-black text-white fixed top-0 left-0 right-0'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href="/" className='text-2xl font-bold text-purple-200'>Blog by<span className='text-purple-600'> DDE</span></a>

            {/* nav-items for lg devices */}
            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    navItems.map(({path, link}) => <li className='text-white' key={path}>
                        <NavLink className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""} to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>

            {/* menu icons */}
            <div className='text-white lg:flex gap-4 items-center hidden'>
                <a href="https://www.instagram.com/dtech.services?igsh=Y3VODJsN3oza2dy&utm_source=qr" className='hover:text-purple-200'><FaInstagram/></a>
                <a href="https://www.linkedin.com/in/davies-david-7a461a257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className='hover:text-purple-200'><FaLinkedin/></a>
                <a href="https://github.com/Dayveesptf" className='hover:text-purple-200'><FaGithub/></a>
                {!isLoggedIn ? (
                <button
                onClick={openModal}
                className="bg-purple-500 px-6 py-2 font-medium rounded hover:bg-purple-300 hover:text-purple-900 transition-all duration-200 ease-in"
                >
                    Login
                </button>
                ) : (
                    <div className='w-10 h-10 border-2 rounded-full'><FaUser className='w-3/4 h-3/4 m-auto mt-1'/></div>
                )}            
            </div>

            {/* Modal component */}
            <Modal isOpen={isModalOpen} onClose={closeModal}/>

            {/* mobile menu btn, display mobile screen */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {
                        isMenuOpen ? <FaXmark  className='w-5 h-5 text-purple-600'/> : <FaBars className='w-5 h-5 hover:text-purple-600'/>
                    }
                </button>
            </div>

        </nav>
        {/* Menu Items small screens */}
        <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-purple-200 ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                {
                    navItems.map(({path, link}) => <li className='text-black' key={path}>
                        <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>
        </div>
     </header>
   )
 }
 
 export default Navbar 