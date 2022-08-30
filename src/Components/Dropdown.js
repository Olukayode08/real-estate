import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { menuItems } from '../data'

const Dropdown = ({toggle, open}) => {
  return (
    <>
      <div className={open ? 'dropdown-container active': 'dropdown-container' }  open={open} onClick={toggle}>
        <button className='close-nav' onClick={toggle}>
          <FaTimes />
        </button>
        <div>
          <div className='menu'>
            {menuItems.map((menuItem) => {
              const { id, title, link } = menuItem;
              return (
                <li className='links' key={id}>
                  <a className='link' href={link}>
                    {title}
                  </a>
                </li>
              );
            })}
          </div>
          <p className='contact-me'>
            Contact
          </p>
        </div>
      </div>
    </>
  );
}

export default Dropdown