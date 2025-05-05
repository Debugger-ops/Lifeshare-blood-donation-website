import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='relative bg-red-600 text-white'>
            {/* Desktop and Mobile Header */}
            <div className='flex justify-between items-center h-20 px-4 md:px-8 lg:px-16'>
                {/* Logo */}
                <div className="logo flex items-center h-20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40" className="md:w-50 md:h-50">
                        <path
                            d="M50 85 C20 65, 0 50, 0 30 C0 10, 15 0, 30 0 C40 0, 47 10, 50 15 C53 10, 60 0, 70 0 C85 0, 100 10, 100 30 C100 50, 80 65, 50 85Z"
                            fill="white"
                            stroke="none"
                        />
                        <path
                            d="M50 75 C35 60, 25 50, 25 35 C25 25, 35 20, 45 20 C48 20, 49 25, 50 27 C51 25, 52 20, 55 20 C65 20, 75 25, 75 35 C75 50, 65 60, 50 75Z"
                            fill="red"
                            stroke="none"
                        />
                        <path
                            d="M45 32 H55 V42 H65 V52 H55 V62 H45 V52 H35 V42 H45 Z"
                            fill="white"
                            stroke="none"
                        />
                    </svg>
                    <span className='font-bold text-xl mx-3 text-white'>LifeShare</span>
                </div>

                {/* Desktop Navigation - Hidden on mobile */}
                <ul className="hidden md:flex justify-center items-center gap-4 lg:gap-8">
                    <NavLink className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-3 py-2 lg:px-5 lg:py-3 rounded text-base lg:text-lg font-bold' : 'px-3 py-2 hover:bg-red-500 rounded transition-colors')} to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-3 py-2 lg:px-5 lg:py-3 rounded text-base lg:text-lg font-bold' : 'px-3 py-2 hover:bg-red-500 rounded transition-colors')} to="/BloodRequest">
                        <li>Need Blood?</li>
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-3 py-2 lg:px-5 lg:py-3 rounded text-base lg:text-lg font-bold' : 'px-3 py-2 hover:bg-red-500 rounded transition-colors')} to="/Registration">
                        <li>Be a Donor!</li>
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-3 py-2 lg:px-5 lg:py-3 rounded text-base lg:text-lg font-bold' : 'px-3 py-2 hover:bg-red-500 rounded transition-colors')} to="/Faq">
                        <li>Testomonials</li>
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-3 py-2 lg:px-5 lg:py-3 rounded text-base lg:text-lg font-bold' : 'px-3 py-2 hover:bg-red-500 rounded transition-colors')} to="/Contact">
                        <li>Contact Us</li>
                    </NavLink>
                </ul>

                {/* Search Bar - Hidden on small mobile, shown on medium and up */}
                <div className='hidden sm:flex relative p-2 items-center max-w-xs'>
                    <input
                        className='flex border border-gray-300 rounded-2xl pl-10 pr-4 py-1 bg-white text-black w-full'
                        type="text"
                        placeholder='Search'
                        aria-label="Search"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        className='absolute left-3 top-1/2 transform -translate-y-1/2'
                        fill="none"
                        stroke="black"
                    >
                        <path d="M17.5 17.5L22 22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* Hamburger Menu Button - Only visible on mobile */}
                <button 
                    className="md:hidden flex items-center p-2" 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu - Only visible when menu is open */}
            <div className={`md:hidden bg-red-700 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'}`}>
                {/* Mobile Navigation Links */}
                <ul className="flex flex-col px-4 pb-2">
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-4 py-2 rounded my-1 font-bold' : 'px-4 py-2 my-1 hover:bg-red-500 rounded')} 
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <li>Home</li>
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-4 py-2 rounded my-1 font-bold' : 'px-4 py-2 my-1 hover:bg-red-500 rounded')} 
                        to="/BloodRequest"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <li>Need Blood?</li>
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-4 py-2 rounded my-1 font-bold' : 'px-4 py-2 my-1 hover:bg-red-500 rounded')} 
                        to="/Registration"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <li>Be a Donor!</li>
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-4 py-2 rounded my-1 font-bold' : 'px-4 py-2 my-1 hover:bg-red-500 rounded')} 
                        to="/Faq"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <li>Testomonials</li>
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-4 py-2 rounded my-1 font-bold' : 'px-4 py-2 my-1 hover:bg-red-500 rounded')} 
                        to="/Contact"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <li>Contact Us</li>
                    </NavLink>
                </ul>
                
                {/* Mobile Search Bar */}
                <div className='sm:hidden relative px-4 py-2'>
                    <input
                        className='flex border border-gray-300 rounded-2xl pl-10 pr-4 py-1 bg-white text-black w-full'
                        type="text"
                        placeholder='Search'
                        aria-label="Search"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        className='absolute left-7 top-1/2 transform -translate-y-1/2'
                        fill="none"
                        stroke="black"
                    >
                        <path d="M17.5 17.5L22 22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
