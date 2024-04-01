'use client'

import { useState } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import { Footer } from "./components/Footer";


export default function Home() {

  const [currentSlider, setCurrentSlider] = useState(0);

  const slider = [
    { title: 'ICELAND', image: '/iceland-bg.webp' },
    { title: 'MALDIVES', image: '/maldives-bg.webp' },
    { title: 'THAILAND', image: '/thailand-bg.webp' },
    { title: 'COSTA RICA', image: '/costa-rica-bg.webp' },
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
      style={{ backgroundImage: `url(${slider[currentSlider].image}` }}>

      <section className="grid md:grid-rows-3-[60px, 1fr, 60px] grid-rows-3-[20px, 1fr, 20px] place-items-center sm:gap-10 min-h-screen bg-gradient-to-t from-gray-950 from-1% to-transparent to-80%">

        <img className="w-[75px]"
          src="/logo.webp" alt="logo" />

        <div className="flex flex-col items-center">

          <div className="flex items-center justify-center gap-44 group w-[100vw]">
            <IoIosArrowBack
              className="hidden sm:group-hover:block hover:text-gray-50/80 cursor-pointer w-[20vh] text-gray-50/40 min-h-[30vh] animate-fade"
              onClick={prevSlide} />

            <p className="font-title content-center w-[700px] h-[240px] text-center text-[80px] sm:text-[150px] tracking-[7px] sm:m-4 animate-fade-down"
              key={currentSlider}>
              {slider[currentSlider].title}
            </p>

            <IoIosArrowForward
              className="hidden sm:group-hover:block hover:text-gray-50/80 cursor-pointer w-[20vh] text-gray-50/40 min-h-[30vh] animate-fade"
              onClick={nextSlide} />
          </div>

          <button className="bg-[#364649] tracking-[1px] hover:bg-[#708f96] transition duration-300 ease-out py-1.5 px-6 rounded-3xl w-[150px]">
            EXPLORE
          </button>

          <div className="flex top-4 justify-center py-4">
            {slider.map((slide, slideIndex) => {
              return <div
                key={slide}
                onClick={() => goToSlide(slideIndex)}
                className="sm:w-[100px] w-[50px] flex items-center justify-center"
                >
                <RxDotFilled className={slideIndex === currentSlider ? "text-6xl cursor-pointer transition-all duration-500 h-20" : "text-gray-50/50 text-3xl cursor-pointer transition-all duration-500 h-20"} />
              </div>
            })}
          </div>
        </div>

        <Footer />
      </section>

    </main>
  )
}
