import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineYoutube, } from 'react-icons/ai';


const Footer = () => {
  return (
    <>
      <footer>
        <div className='left'>
          <h1 className='footer-heading'>Let's find <br />your Dream Home</h1>
          <p className='icons'>
            <AiOutlineYoutube className='icon'/> <FaInstagram className='icon'/>
            <FaFacebookF className='icon'/> <FaLinkedinIn className='icon'/>
          </p>
        </div>
        <div className='right'>
          <div className='right-one'>
            <div>
              <p className='footer'>Contact</p>
              <p className='footer'>FAQs</p>
              <p className='footer'>Support</p>
              <p className='footer'>Question</p>
            </div>
            <div>
              <p className='footer'>Offices</p>
              <p className='footer'>United States</p>
              <p className='footer'>Europe</p>
              <p className='footer'>Lagos</p>
            </div>
          </div>
          <div className='lets-chat'>
            <button className='chat secone-btn'>Let's Chat</button>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer