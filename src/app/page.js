'use client'

import { useState } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";


export default function Home() {

  const [currentSlider, setCurrentSlider] = useState(0);

  const slider = [
    { title: 'Iceland', url: '/iceland-bg.webp' },
    { title: 'Maldives', url: '/maldives-bg.webp' },
    { title: 'Thailand', url: '/thailand-bg.webp' },
    { title: 'Costa Rica', url: '/costa-rica-bg.webp' },
  ]

  const nextSlide = () => {
    const newIndex = currentSlider === slider.length - 1 ?
      0 : currentSlider + 1;
    setCurrentSlider(newIndex)
  };

  const prevSlide = () => {
    const newIndex = currentSlider === 0 ?
      slider.length - 1 : currentSlider - 1;
    setCurrentSlider(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentSlider(slideIndex)
  }

  return (
    <main className="min-h-screen bg-cover bg-no-repeat duration-500"
      style={{ backgroundImage: `url(${slider[currentSlider].url}` }}>
      <section className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex items-center min-h-[30vh] group">
          <IoIosArrowBack 
          className="hidden group-hover:block hover:text-gray-50 cursor-pointer w-[20vh] text-gray-50/60 min-h-[25vh] animate-fade"
          onClick={prevSlide} />

          <p className="font-title text-transparent w-[761px] text-center bg-clip-text bg-gradient-to-t from-transparent from-20% to-gray-100 to-70% text-[200px] tracking-[7px] m-4">
            {slider[currentSlider].title}
          </p>

          <IoIosArrowForward
          className="hidden group-hover:block hover:text-gray-50 cursor-pointer w-[20vh] text-gray-50/60 min-h-[30vh] animate-fade" 
          onClick={nextSlide} />
        </div>

        <button className="bg-gray-300/60 py-1.5 px-6 rounded-3xl">
          EXPLORE
        </button>

        <div className="flex top-4 justify-center p-4">
          {slider.map((slide, slideIndex) => {
            return <div
              key={slide}
              onClick={() => goToSlide(slideIndex)}
              className={slideIndex === currentSlider ? "flex items-center justify-center w-[100px] text-9xl cursor-pointer transition-all duration-500 h-20" : "flex items-center justify-center w-[100px] text-gray-50/50 text-5xl cursor-pointer transition-all duration-500 h-20"}>
              <RxDotFilled />
            </div>
          })}
        </div>
      </section>

    </main>
  )
}
