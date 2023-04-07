import React, { useState } from 'react'
import './navbar.scss'
import { HiMenuAlt4, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
      {/* <div className='app__navbar-logo'>
        <img src={images.logo1} alt='logo' />
      </div> */}
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className='app__flex' key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <div>
            <HiX
              className='app__navbar-menu-close'
              onClick={() => setToggle(false)}
            />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={`${item}`}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
