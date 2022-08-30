import React from 'react'
import { sectwo } from '../data'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const SecTwo = () => {
  return (
    <>
      <main className='sectwo-container'>
        {sectwo.map((sectwodata) => {
          const {
            id,
            heading,
            image,
            imageTwo,
            button,
            descriptionTwo,
            description,
          } = sectwodata;
          return (
            <section key={id}>
              <h1 className='sectwo-header'>{heading}</h1>
              <div className='sectwo'>
                <div className='sectwo-left'>
                  <img className='right-img' src={image} alt='10 Bedroom' />
                  <p className='description'>{description}</p>
                  <a className='more-info' href='#'>
                    {button}
                    <BsFillArrowRightCircleFill className='forward-arrow' />
                  </a>
                </div>
                <div className='sectwo-right'>
                  <img className='left-img' src={imageTwo} alt='4 Bedroom' />
                  <p className='description'>{descriptionTwo}</p>
                  <a className='more-info' href='#'>
                    {button}
                    <BsFillArrowRightCircleFill className='forward-arrow' />
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}

export default SecTwo