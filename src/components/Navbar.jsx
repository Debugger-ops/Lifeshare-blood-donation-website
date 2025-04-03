import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-red-600 text-white h-20 py-2'>
            <div className="logo flex items-center mx-16 h-20 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
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
            <ul className="flex justify-center items-center gap-8">
                <NavLink className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-5 py-3 rounded text-lg font-bold' : '')} to="/"><li>Home</li></NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-5 py-3 rounded text-lg font-bold' : '')} to="/BloodRequest"><li>Need Blood?</li></NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-5 py-3 rounded text-lg font-bold' : '')} to="/Registration"><li>Be a Donor!</li></NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-5 py-3 rounded text-lg font-bold' : '')} to="/Faq"><li>Testomonials</li></NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-5 py-3 rounded text-lg font-bold' : '')} to="/Contact"><li>Contact Us</li></NavLink>
            </ul>
            <div className='relative p-2 flex items-center'>
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
                    fill="white"
                    stroke="black"
                >
                    <path d="M17.5 17.5L22 22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
            </div>

        </nav>
    );
};

export default Navbar;
