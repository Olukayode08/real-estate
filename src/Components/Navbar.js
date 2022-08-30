import React from 'react'
import { menuItems } from '../data';
import {FaTimes, FaBars} from 'react-icons/fa'

const Navbar = ({toggle}) => {
  return (
    <>
      <nav>
        <a className='logo' href='#'>
          Olukay
        </a>
        <ul className='nav-bar'>
          {menuItems.map((menuItem) => {
            const { id, title, link } = menuItem;
            return (
              <li key={id} className='nav'>
                <a className='navlinks' href={link}>
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
        <div>
          <a className='contact' href='#'>
            Contact
          </a>
          <div className='show-nav active'>
            <button className='nav-btn' onClick={toggle}>
              <FaBars />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
