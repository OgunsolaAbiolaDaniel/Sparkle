/*'use client'
import React from 'react'
import Image from 'next/image';
import { useState,useEffect } from 'react';
import Images from './images'

function Firstsection() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((previndex) => (previndex === Images.length - 1 ? previndex + 1));
        },4000)
    })

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === Images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change 3000 to set the interval duration in milliseconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);


  return (
    <section>
        <div>
              <Image src={ } alt={ } />
      </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </section>
  );
}

export default Firstsection*/