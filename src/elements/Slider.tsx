import React, { useState } from "react";
import { LeftArrow, RightArrow } from "./Logo";

interface SliderProps {
  children?: React.ReactNode;
  productLength?: number | undefined;
}

const Slider = ({ children, productLength }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerPage = 4;

  const handleClickPrev = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const handleClickNext = () => {
    const maxSlide = Math.ceil((productLength ?? 0) / slidesPerPage) - 1;
    setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, maxSlide));
  };

  return (
    <div className="w-full mx-auto relative">
      <div className="flex items-center justify-between">
        {/* Previous button */}
        <div className="lg:p-2 md:p-2 sm:p-1.5 p-1">
          <button
            className={`lg:w-12 md:w-12 sm:w-10 w-8 lg:h-12 md:h-12 sm:h-10 h-8 rounded-full group cursor-pointer hover:bg-secondary transition-colors flex justify-center items-center duration-200 border-secondary border-2 `}
            onClick={handleClickPrev}
            disabled={currentSlide === 0}
          >
            <LeftArrow customClass={'text-secondary group-hover:text-white'}/>
          </button>
        </div>
        {/* Slide Track */}
        <div className="flex lg:space-x-4 md:space-x-3 sm:space-x-2 space-x-2 w-full overflow-x-hidden">
          <div
            className="flex transition-transform py-8 duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * (20 / slidesPerPage)}%)` }}
          >
            {children}
          </div>
        </div>
        {/* Next button */}
        <div className="lg:p-2 md:p-2 sm:p-1.5 p-1">
          <button
            className={`lg:w-12 md:w-12 sm:w-10 w-8 lg:h-12 md:h-12 sm:h-10 h-8 rounded-full group cursor-pointer hover:bg-secondary transition-colors flex justify-center items-center duration-200 border-secondary border-2 `}
            onClick={handleClickNext}
            disabled={currentSlide >= Math.max((productLength ?? 0) - slidesPerPage, 0)}
          >
            <RightArrow customClass={'text-secondary group-hover:text-white'}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
