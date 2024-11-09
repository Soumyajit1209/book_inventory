import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark } from 'react-icons/fa6';
import {AuthContext} from '../contects/AuthProvider'



const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  
  const {user} = useContext(AuthContext);
  console.log(user)


  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Shop', path: '/shop' },
    { label: 'Sell  Books', path: '/admin/dashboard' },
    { label: 'Blog', path: '/blog' },
  ];

  const handleScroll = () => {
    if (window.scrollY > 100) {
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header  className='w-full bg-transparent fixed top-0 right-0 transition-all ease-in duration-300'>
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300 ": ""}`}>
        <div  className='flex justify-between items-center text-base gap-8`'>
          {/* logo */}
          <Link to="/" className='text-2xl font-bold text-blue-700 flex item-center gap-2'>
            <FaBlog className='inline-block' />
            <b>Books Library</b>
          </Link>  

                {/* nav items for large devices */}
      <ul className='md:flex space-x-12 '>
        {
            navItems.map(({label,path}) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{label}</Link>)
        }
          
        
      </ul>

      {/* btn for lg devices */}
      <div className='space-x-12 hidden lg:flex  item-center'>
        <button >
          <FaBarsStaggered className='w-5 hover:text-blue-700' />
        </button>
        
      </div>

      {/* menu btn for mobile devices */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-black focus:outline-none'>
         {
            isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black'/>
         }
        </button> 
      </div>
      {/* navitems for sm devices */}
      <div className={` space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0  left-0" : "hidden"}`}>
        {
          navItems.map(({label,path}) => <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer '>{label}</Link>)

        }
      </div>

      {/* mobile menu */}
      {isMenuOpen && (
        <ul >
          {navItems.map(({ label, path }) => (
            <li key={path} >
              <Link to={path} >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  </nav>
</header>
         
  );
};

export default NavBar;