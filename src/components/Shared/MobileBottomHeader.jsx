
'use client'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const MobileBottomHeader = () => {
    const [showCartPage, setShowCartPage] = useState(false);
    const [showMenus, setShowMenus] = useState(false);
    const [showCategoryPage, setShowCategoryPage] = useState(false);
    const cartModalRef = useRef(null);
    const buttonRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutsideCart = (event) => {
            if (cartModalRef.current && !cartModalRef.current.contains(event.target)) {
                document.body.style.overflow = 'auto';
                document.body.style.paddingRight = '0px';
                setShowCartPage(false);
            }
        };

        if (showCartPage) {
            document.addEventListener('mousedown', handleClickOutsideCart);
        } else {
            // Remove event listener when the modal is closed
            document.removeEventListener('mousedown', handleClickOutsideCart);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideCart);
        };
    }, [showCartPage]);


    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the click is outside both the menu and the button
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setShowMenus(false);
            }
        };

        // Add the event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



    return (
        <div>
            <div className="lg:hidden fixed z-[99999] bottom-0 bg-emerald-500 flex items-center justify-between w-full h-16 px-3 sm:px-10 ">
                <button
                    onClick={() => setShowCategoryPage(!showCategoryPage)}
                    aria-label="Bar"
                    className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
                >
                    <span className="text-xl text-white">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 drop-shadow-xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1={17} y1={10} x2={3} y2={10} />
                            <line x1={21} y1={6} x2={3} y2={6} />
                            <line x1={21} y1={14} x2={3} y2={14} />
                            <line x1={17} y1={18} x2={3} y2={18} />
                        </svg>
                    </span>
                </button>
                <a
                    className="text-xl text-white"
                    rel="noreferrer"
                    aria-label="Home"
                    href="#"
                >
                    <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 drop-shadow-xl"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                </a>


                <button
                    ref={buttonRef}
                    className="text-xl text-white px-4 py-2"
                    type='button'
                    onClick={() => setShowMenus(!showMenus)}
                >
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                        className="w-6 h-6 drop-shadow-xl"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={32}
                            d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
                        />
                    </svg>


                </button>
                {showMenus && <div ref={menuRef} className='absolute right-0 top-[-64px] bg-customBlue p-4'>
                    <button className='text-white'>Log Out</button>
                </div>}



            </div>
            <div tabIndex={-1} className={`drawer block lg:hidden drawer-left ${showCategoryPage && 'drawer-open'}`}>
                <div className="drawer-mask" />
                <div className="drawer-content-wrapper" style={{ transform: showCategoryPage ? "" : "translateX(-100%)" }}>
                    <div className="drawer-content">
                        <div className="flex flex-col w-full h-full   dark:text-slate-400 dark:bg-slate-800 cursor-pointer scrollbar-hide">
                            <div className="w-full flex justify-between items-center h-16 px-3 py-4 bg-emerald-500 text-white border-b border-gray-100">
                                <h2 className="font-semibold font-serif text-lg m-0 text-heading flex items-center">
                                    <Link className="mr-2" href="/">
                                        <img
                                            alt="logo"
                                            className="w-12 rounded-full"
                                            src="/images/dreamland.webp"
                                            style={{ color: "transparent" }}
                                        />
                                    </Link>
                                    <span className="text-center">Dreamland Nursery</span>
                                </h2>
                                <button
                                    onClick={() => setShowCategoryPage(!showCategoryPage)}
                                    className="flex text-xl items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-red-500 p-2 focus:outline-none transition-opacity hover:text-red-600"
                                    aria-label="close"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 512 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="w-full max-h-full">
                                <h2 className="font-semibold font-serif text-lg m-0 text-heading flex align-center justify-center border-b px-4 py-3">
                                    All Pages
                                </h2>
                                <div className='px-4'>
                                    <div className='my-3'>
                                        <Link lang='bn' className='mb-8' href='/'>
                                            Home
                                        </Link>
                                    </div>
                                    <div className='my-3'>
                                        <Link lang='bn' className='mb-8' href='/about-us'>
                                            About Us
                                        </Link>
                                    </div>
                                    <div className='my-3'>
                                        <Link lang='bn' className='mb-8' href='/contact-us'>
                                            Contact Us
                                        </Link>
                                    </div>
                                    <div className='my-3'>
                                        <Link lang='bn' className='mb-8' href='/why-us'>
                                            Why Us
                                        </Link>
                                    </div>
                                    <div className='my-3'>
                                        <Link lang='bn' className='mb-8' href='/our-works'>
                                            Our Works
                                        </Link>
                                    </div>
                                    <div className='my-3'>
                                        <Link lang='bn' className='mb-8' href='/all-products'>
                                            Our Shop
                                        </Link>
                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="drawer-handle">
                        <i className="drawer-handle-icon" />
                    </div>
                </div>
            </div>

        </div >
    );
};

export default MobileBottomHeader;