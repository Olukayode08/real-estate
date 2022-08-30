import React from 'react'
import { secfour } from '../data';


const SecFour = () => {
  return (
    <main>
      {secfour.map((seconedata) => {
        const {
          id,
          heading,
          paragraph,
          reverse,
          image,
          paragraphTwo,
          button,
          animations,
        } = seconedata;
        return (
          <section className='secone' key={id}>
            <div className='secone-right'>
              <img className='contain' src={image} alt='House' />
            </div>
            <div className='secone-left'>
              <h1 className='header'>{heading}</h1>
              <p className='paragraph'>{paragraph}</p>
              <p className='paragraph'>{paragraphTwo}</p>
              <button className='secfour-btn'>{button}</button>
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default SecFour
