import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from '../assets/icons';
import LanguageSelector from './languageselector';

const Navigation = () => {

    const [handleDrop, setHandleDrop] = useState(false);

    const handleDropDown = () => {
        setHandleDrop(!handleDrop);
    }

    // Gather location information
    const location = useLocation()

    // State for opening navigation
    const [navbar, setNavbar] = useState(false);
    const handleNav = (e) => {
        e.preventDefault()
        setNavbar(!navbar)
    }
    if(location.pathname.includes('/admin')) return(null)
    else{
    return (
        <nav className="mx-auto w-full fixed z-50 bg-slate-100">

            <div className="md:w-11/12 w-full md:px-0 py-2 px-10 rounded-lg mx-auto flex justify-between items-center bg-whitebackdrop-blur-md ">
                <div className="flex w-48 h-full justify-center items-center ml-8">
                    <img className='w-full' src={Logo} />
                </div>
                <div className="md:flex justify-aroud items-center px-8 py-2 hidden">
                    <Link className={`ml-10 text-sm hover:text-sky-800 text-slate-950 ${location.pathname === '/' ? `font-bold` : ``}`} to="/">Home</Link>
                    <Link className={`ml-10 text-sm hover:text-sky-800 text-slate-950 ${location.pathname === '/service' ? `font-bold` : ``}`} to="/service">Layanan Kami</Link>
                    <Link className={`ml-10 text-sm hover:text-sky-800 text-slate-950 ${location.pathname === '/portofolio' ? `font-bold` : ``}`} to="/portofolio">Produk</Link>
                    <Link className={`ml-10 text-sm hover:text-sky-800 text-slate-950 ${location.pathname === '/about-us' ? `font-bold` : ``}`} to="/about">Tentang Kami</Link>
                </div>
                <div className='mr-8'>
                    <a href={"#"} className='text-sky-900 border-sky-900 border hover:bg-sky-800 hover:text-white px-6 py-2 text-sm rounded-xl'>Contact Us</a>
                </div>
                <div className="md:hidden flex items-center">
                    <div className="mr-2"> 
                        <LanguageSelector />
                    </div>
                    <a href="#" onClick={handleNav}>
                        {navbar ?
                            (<svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11 text-slate-50" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>)
                            :
                            (<svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11 text-slate-50" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>)}

                    </a>
                </div>
            </div>
            {navbar ?
                <div className={`w-screen h-screen fixed bg-slate-50 bg-opacity-90`}>
                    <div className="font-sans">
                        <ul className="flex-col w-screen h-screen text-center pt-32 justify-around items-center text-xl tracking-wide text-white">
                            <li onClick={handleNav} className="mr-8 py-3 font-normal text-blue-950 hover:text-blue-800 hover:underline" >
                                <Link className={`ml-10 text-lg ${location.pathname === '/' ? `font-extrabold text-blue-950` : ``}`} to="/">Home</Link>
                            </li>
                            <li onClick={handleNav} className="mr-8 py-3 font-normal text-blue-950 hover:text-blue-800 hover:underline">
                                <Link className={`ml-10 text-lg ${location.pathname === '/service' ? `font-extrabold text-blue-950 ` : ``}`} to="/service">Services</Link>
                            </li>
                            <li onClick={handleNav} className="mr-8 py-3 font-normal text-blue-950 hover:text-blue-800 hover:underline">
                                <Link className={`ml-10 text-lg ${location.pathname === '/portofolio' ? `font-extrabold text-blue-950` : ``}`} to="/portofolio">Case Studies</Link>
                            </li>
                            <li onClick={handleNav} className="mr-8 py-3 font-normal text-blue-950 hover:text-blue-800 hover:underline">
                                <Link className={`ml-10 text-lg ${location.pathname === '/blog' ? `font-extrabold text-blue-950` : ``}`} to="/blog">Blog</Link>
                            </li>
                            <li onClick={handleNav} className="mr-8 py-3 font-normal text-blue-950 hover:text-blue-800 hover:underline">
                                <Link className={`ml-10 text-lg ${location.pathname === '/about' ? `font-extrabold text-blue-950 ` : ``}`} to="/about">About Us</Link>
                            </li>
                            <li onClick={handleNav} className="mr-8 py-3 font-normal text-blue-950 hover:text-blue-800 hover:underline">
                                <Link className={`ml-10 text-lg ${location.pathname === '/contact' ? `font-extrabold text-blue-950` : ``}`} to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                : null}

        </nav>
    )}
}

export default Navigation