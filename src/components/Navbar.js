import React, { useState, useEffect, useContext } from 'react';
import FormContext from '../context/FormContext';
import { Button } from './Button';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  const {username,showInfo,showSignUp} = useContext(FormContext) 
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            <li style={{
              listStyleType: "none",
            }}>
              <Link
                to={showSignUp?'/sign-up':`/${username}`}
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                {showSignUp?"Sign Up":`${username}`}
              </Link>
            </li>
            
          </ul>
          {(button && <Button buttonStyle='btn--outline'>{showInfo?`${username}`:"SIGN UP"}</Button>)}
        </div>
      </nav>
    </>
  );
}

export default Navbar;