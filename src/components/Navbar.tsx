'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import logoImage from '@/components/images/log-3.png'; 
import lImage from '@/components/images/download.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    featured: false,
    section: false,
    templates: false,
  });

  const menuRef = useRef<HTMLDivElement>(null);

 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const toggleDropdown = (dropdown: keyof typeof dropdowns) => {
    setDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setDropdowns({
          featured: false,
          section: false,
          templates: false,
        });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={menuRef}
      className="border-b border-gray-200 w-full h-[79px] flex items-center bg-white shadow-md"
    >
     
      <div className="pl-8">
        <Image
          src={logoImage}
          alt="Company logo"
          width={67}
          height={67}
          className="rounded-lg"
          priority
        />
      </div>

     
      <div className="lg:hidden ml-auto mr-8">
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          title={isOpen ? 'Close menu' : 'Open menu'}
        >
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      
      <div
        className={`flex-grow lg:flex items-center justify-start space-x-8 text-lg hidden ml-10 ${
          isOpen ? 'block' : 'hidden'
        } lg:block`}
      >
        <Link href="#" className="hover:text-green-600">
          Overview
        </Link>
        <div className="relative">
          <button
            onClick={() => toggleDropdown('featured')}
            aria-expanded={dropdowns.featured}
            aria-haspopup="true"
            className="hover:text-green-600 focus:outline-none flex items-center"
          >
            Features
            <svg
              className={`ml-2 h-5 w-5 transition-transform ${
                dropdowns.featured ? 'rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {dropdowns.featured && (
            <div className="absolute z-10 bg-white shadow-lg mt-2 rounded border border-gray-200 transition ease-in-out duration-150">
              <Link href="#" className="block px-4 py-2 hover:text-green-600">
                Featured Item 1
              </Link>
              <Link href="#" className="block px-4 py-2 hover:text-green-600">
                Featured Item 2
              </Link>
              <Link href="#" className="block px-4 py-2 hover:text-green-600">
                Featured Item 3
              </Link>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => toggleDropdown('section')}
            aria-expanded={dropdowns.section}
            aria-haspopup="true"
            className="hover:text-green-600 focus:outline-none flex items-center"
          >
            Sections
            <svg
              className={`ml-2 h-5 w-5 transition-transform ${
                dropdowns.section ? 'rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {dropdowns.section && (
            <div className="absolute z-10 bg-white shadow-lg mt-2 rounded border border-gray-200 transition ease-in-out duration-150">
              <Link href="#" className="block px-4 py-2 hover:text-green-600">
                Section Item 1
              </Link>
              <Link href="#" className="block px-4 py-2 hover:text-green-600">
                Section Item 2
              </Link>
              <Link href="#" className="block px-4 py-2 hover:text-green-600">
                Section Item 3
              </Link>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => toggleDropdown('templates')}
            aria-expanded={dropdowns.templates}
            aria-haspopup="true"
            className="hover:text-green-600 focus:outline-none flex items-center"
          >
            Templates
            <svg
              className={`ml-2 h-5 w-5 transition-transform ${
                dropdowns.templates ? 'rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {dropdowns.templates && (
            <div className="absolute z-10 bg-white shadow-lg mt-2 rounded border border-gray-200 transition ease-in-out duration-150">
              <Link href="#" className="block px-4 py-2 hover:text-green-600">
                Template 1
              </Link>
              <Link href="#" className="block px-4 py-2 hover:text-green-600">
                Template 2
              </Link>
              <Link href="#" className="block px-4 py-2 hover:text-green-600">
                Template 3
              </Link>
            </div>
          )}
        </div>
      </div>

     
      <div className="hidden lg:block ml-auto mr-8">
        <Link
          href="#"
          className="px-4 py-2 text-lg text-green-600 flex items-center"
        >
          Purchase Now 
          <Image
            src={lImage}
            alt="Purchase Icon"
            width={33}
            height={33}
            className="inline-block ml-2"
          />
        </Link>
      </div>

      
      {isOpen && (
        <div className="lg:hidden absolute top-[79px] left-0 w-full bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="#" className="hover:text-green-600">
              Overview
            </Link>
            <Link href="#" className="hover:text-green-600">
              Features
            </Link>
            <Link href="#" className="hover:text-green-600">
              Sections
            </Link>
            <Link href="#" className="hover:text-green-600">
              Templates
            </Link>

            <Link
              href="#"
              className="block lg:hidden mt-4 px-4 py-2 text-center text-green-600 hover:bg-green-600 hover:text-white rounded"
            >
              Purchase Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
