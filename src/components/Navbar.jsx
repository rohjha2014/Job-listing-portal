import React, { useState } from 'react';
import{Link, NavLink } from "react-router-dom";
import{FaBarsStaggered, FaXmark} from "react-icons/fa6";

const Navbar = () => {
  const [isMenuopen, setIsMenuopen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuopen(!isMenuopen)
  };
  const navItems = [
    { path: "/", title: " Search a Job" },
    { path: "/my-job", title: "My Jobs" },
    // { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post A Job" },
  ] 
  return (
    <header className='max-w-screen-2xl container mx-auto x1:px-24 px-20 py-6 sticky top-0 bg-white z-50 '>
      <nav className='flex justify-between items-center py-6 bg-grey'>
        <a href="/" className='flex items-center gap-2 text-2xl text-black'>
          <svg
            xmlns="http://www.w3.org/2000svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none">
            <circle cx="12.0143" cy="12.5143" r="12.0143" fill="#3575E2" fillOpacity="0.4" />
            <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2" />
          </svg> <span>JobPortal</span>
        </a>
        {/* nav items for large devices */}

        <ul className='hidden md:flex gap-12'>
          {
            navItems.map(({ path, title }) => (
              <li key={path} className='text-base text-primary'>
                <NavLink
                  to={path}
                  className={({ isActive,}) => isActive ? "active" : ""}
                >
                  {title}
                </NavLink>
              </li>
            ))
          }
        </ul>

        {/* signup & login btn */}
        <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
             <Link to="/login" className='py-2 px-5 border rounded'>Log in</Link>
             <Link to="/sign-up" className='py-2 px-5 border rounded bg-blue text-white'>Sign up</Link>
        </div>
        {/* mobile menu */}
        <div className='md:hidden block'>
          <button onClick={handleMenuToggler}> 
            { 
              isMenuopen ? <FaXmark className='w-5 h-5 text-primary'/> :<FaBarsStaggered className='w-5 h-5 text-primary'/>
            }
            
          </button>
        </div>
      </nav>

      {/* navitems fo mobile */}

  
       
    </header>
  )
}

export default Navbar
