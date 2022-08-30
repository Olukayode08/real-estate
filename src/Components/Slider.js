import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import { sliderImages } from '../data'
import {
  BsFillArrowRightCircleFill,
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from 'react-icons/bs';


const Slider = () => {
    const [details, setDetails] = useState(sliderImages)
    const [active, setActive] = React.useState(0)


    const nextSlide = () => {
      setActive(active + 1);
    };
    const prevSlide = () => {
      setActive(active - 1);
    };

  
  useEffect(() => {
    const lastIndex = details.length - 1;
    if (active < 0) {
      setActive(lastIndex);
    } else if (active > lastIndex) {
      setActive(0);
    }
  }, [active, details]);

    useEffect(()=>{
      let slider = setInterval(()=>{
        setActive(active + 1)
      }, 2000)
      return ()=> {
        clearInterval(slider)
      }
    },[active])

  return (
    <>
      <div className='section'>
        <div className='slider-section'>
          {sliderImages.map((sliderImage, personIndex) => {
            const {id, title, alt, path, label, Image, price } = sliderImage;
                      let position = 'nextSlide';
                      if (personIndex === active) {
                        position = 'activeSlide';
                      } else if (
                        active === 0 &&
                        personIndex === details.length - 1
                      ) {
                        position = 'lastSlide';
                      }
            return (
              <article className={position} key={id}>
                <div className='slider-container'>
                  <img className='slide-images' src={Image} alt={alt} />
                  <div className='slide-content'>
                    <h1 className='title'>{title}</h1>
                    <p className='price'>{price}</p>
                    <p className='price price-btn'>
                      {label} <BsFillArrowRightCircleFill />
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className='slider-btn'>
          <button className='next' onClick={nextSlide}>
            <BsFillArrowRightSquareFill />
          </button>
          <button className='prev' onClick={prevSlide}>
            <BsFillArrowLeftSquareFill />
          </button>
        </div>
      </div>
    </>
  );
}

export default Slider