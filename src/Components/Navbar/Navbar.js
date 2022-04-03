import React from 'react';
import { Link } from 'react-router-dom';
// import Link from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <div className='sticky top-0 bg-white px-11 py-7 flex md:justify-between'>
            <div className='hidden md:block'>
                <Link className='font-serif font-bold text-xl' to='/'>THE SHOW RACK</Link>
                </div>

            <div className='flex gap-5 text-xl'>
                <Link className="hover:text-black text-gray-600" to='/'>Home</Link>
                <Link className="hover:text-black text-gray-600" to='/dashboard'>Dashboard</Link>
                <Link className="hover:text-black text-gray-600" to='/blogs'>Blogs</Link>
                <Link className="hover:text-black text-gray-600" to='/reviews'>Reviews</Link>
                <Link className="hover:text-black text-gray-600" to='/about'>About</Link>
                </div>
        </div>
    );
};

export default Navbar;