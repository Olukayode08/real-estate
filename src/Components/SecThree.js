import React from 'react'
import { secthree } from '../data'

const SecThree = () => {
  return (
    <>
            {secthree.map((seconedata)=>{
            const{id, heading, paragraph, reverse, image, paragraphTwo, button, animations} = seconedata
                return (
                  <section className='secone secthree' key={id}>
                    <div className='secone-left secthree-left'>
                      <h1 className='header'>{heading}</h1>
                      <p className='paragraph'>{paragraph}</p>
                      <p className='paragraph'>{paragraphTwo}</p>
                      <button className='secone-btn'>{button}</button>
                    </div>
                    <div className='secone-right'>
                      <img src={image} alt='House' />
                    </div>
                  </section>
                );
              }
          )
    }
    </>
  )
}

export default SecThree
