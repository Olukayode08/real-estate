import React from 'react'
import { secone } from '../data'

const Secone = () => {
  return (
    <main>
        {secone.map((seconedata)=>{
            const{id, heading, paragraph, reverse, image, paragraphTwo, button, animations} = seconedata
                return (
                  <section className='secone' key={id}>
                      <div className='secone-left'>
                        <h1 className='header'>{heading}</h1>
                        <p className='paragraph'>{paragraph}</p>
                        <p className='paragraph'>{paragraphTwo}</p>
                        <button className='secone-btn'>{button}</button>
                      </div>
                      <div className='secone-right'>
                        <img className='secone-img' src={image} alt='House' />
                      </div>
                  </section>
                );
        })}
    </main>
  )
}

export default Secone
