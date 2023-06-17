import React, { useRef, useState, useEffect } from 'react';
import styles from './Carousel.css'

import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi'
import {MdReplay} from 'react-icons/md'
import { scroll } from 'framer-motion';

function Carousel({ children }) {
  const carouselRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const[pause, setPause] = useState(false);

  const scrollLeft = () => {
    setPause(true);
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -screenWidth, // Adjust the scroll amount as needed
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    setPause(true);
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: screenWidth, // Adjust the scroll amount as needed
        behavior: 'smooth'
      });
    }
  };

  const scrollReset = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -screenWidth*5, // Adjust the scroll amount as needed
        behavior: 'smooth'
      });
    }
  };



  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    
    let scrollInterval = setInterval(() => {
        scrollRight();
      }, 5000);

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        clearInterval(scrollInterval);
    };
  }, [screenWidth, pause]);


  return (
    <div className="carousel-container overflow-hidden snap-x snap-mandatory">
      <div className="carousel overflow-x-scroll pointer-events-none noscr snap-always snap-start" ref={carouselRef}>
        {children}
      </div>
      
      <div className="absolute mob bottom-0 flex justify-between w-full px-4">
        <button className="bg-black/50 backdrop-blur-xl rounded-b-none outline-none text-white font-thin rounded-2xl px-3 py-2" onClick={scrollLeft}>
          <BiLeftArrowAlt/>
        </button>
        <button className="bg-black/50 backdrop-blur-xl rounded-b-none outline-none text-white font-thin rounded-2xl px-3 py-2" onClick={scrollRight}>
          <BiRightArrowAlt/>
        </button>
      </div>

      <div className="navigation pc flex justify-between w-full px-8">
        <button className="bg-white/10 scale-75 backdrop-blur-xl outline-none text-white font-thin text-xl rounded-2xl p-3" onClick={scrollLeft}>
          <BiLeftArrowAlt/>
        </button>
        <button className="bg-white/10 scale-75 backdrop-blur-xl outline-none text-white font-thin text-xl rounded-2xl p-3" onClick={scrollRight}>
          <BiRightArrowAlt/>
        </button>
      </div>
      <button className='bg-black/50 backdrop-blur-xl outline-none centerh rounded-xl px-5 py-2 text-sm text-white absolute bottom-0 rounded-b-none h-fit' onClick={scrollReset}><MdReplay/></button>
    </div>
  );
}

export default Carousel;
