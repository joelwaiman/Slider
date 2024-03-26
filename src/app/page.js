'use client'

import { useState } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import { Footer } from "./components/Footer";


export default function Home() {

  const [currentSlider, setCurrentSlider] = useState(0);

  const slider = [
    { title: 'ICELAND', url: '/iceland-bg.webp' },
    { title: 'MALDIVES', url: '/maldives-bg.webp' },
    { title: 'THAILAND', url: '/thailand-bg.webp' },
    { title: 'COSTA RICA', url: '/costa-rica-bg.webp' },
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

      <section className="grid grid-rows-3-[60px, 1fr, 60px] place-items-center gap-10 min-h-screen bg-gradient-to-t from-gray-950 from-1% to-transparent to-80%">

        <img className="w-[75px]"
          src="/logo.webp" alt="logo" />

        <div className="flex flex-col items-center">

          <div className="flex items-center group">
            <IoIosArrowBack
              className="hidden group-hover:block hover:text-gray-50 cursor-pointer w-[20vh] text-gray-50/60 min-h-[25vh] animate-fade"
              onClick={prevSlide} />

            <p className="font-title w-[761px] text-center text-[150px] tracking-[7px] m-4 animate-fade-down"
              key={currentSlider}>
              {slider[currentSlider].title}
            </p>

            <IoIosArrowForward
              className="hidden group-hover:block hover:text-gray-50 cursor-pointer w-[20vh] text-gray-50/60 min-h-[30vh] animate-fade"
              onClick={nextSlide} />
          </div>

          <button className="bg-gradient-to-tr hover:bg-gradient-to-tl from-[#708f96] to-[#364649] py-1.5 px-6 rounded-3xl w-[150px]">
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
        </div>

        <Footer />
      </section>

    </main>
  )
}
