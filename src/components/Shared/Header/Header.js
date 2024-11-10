'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Function to handle scroll
  const handleScroll = () => {
    if (window.scrollY > 180) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header class="hidden lg:block">
      <div class="flex justify-around  border-b text-sm py-2">
        <p>Call us: +88 01629189677</p>
        <p>Free Delivery Charge on all orders over ৳2000.00</p>
        <p>Visit Our Facebook Page</p>
      </div>

      <div className={`${isSticky && "fixed w-full top-0 z-50"} transition-all duration-300 ease-in-out`}>
        <div class="flex items-center justify-between py-3 px-5 " style={{ backgroundColor: '#3d3d3d' }}>
          <div class="ms-5 logo ">
            <Link href="/">
              <img class="header-logo w-16 rounded-full" src="/images/dreamland.webp" alt="" />
            </Link>
          </div>
          <div class="menu-primary-menu-container ">
            <ul class="menu flex text-white gap-5 p-3">
              <li id="nav-menu-item-7265" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                <Link href="/" class="cg-menu-link main-menu-link"><span>Home</span></Link>
              </li>
              <li id="nav-menu-item-7266" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                <Link href="/about-us" class="cg-menu-link main-menu-link"><span>About Us</span></Link>
              </li>
              <li id="nav-menu-item-7267" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                <Link href="" class="cg-menu-link main-menu-link"><span>Contact Us</span></Link>
              </li>
              <li id="nav-menu-item-7268" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                <Link href="/why-us" class="cg-menu-link main-menu-link"><span>Why Us</span></Link>
              </li>
              <li id="nav-menu-item-7269" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                <Link href="/our-works" class="cg-menu-link main-menu-link"><span>Our Works</span></Link>
              </li>
              <li id="nav-menu-item-9810" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                <Link href="" class="cg-menu-link main-menu-link"><span>What We Do</span></Link>
              </li>
              <li id="nav-menu-item-7271" class="menu-item menu-item-type-post_type menu-item-object-page"><Link
                href="/all-products" class="cg-menu-link main-menu-link"><span>Shop (All Products)</span></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-[#7b8f36] text-white font-semibold py-1">
        <p class="text-center">Flash sale unlocked ⚡10% off with Fruits Trees</p>
      </div>
    </header>
  );
};

export default Header;