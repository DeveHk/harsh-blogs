import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";

/**
 *
 * DATAFETCH
 * need preview of blogs here
 */
import { slide } from "../data";
const Slider = () => {
  return (
    <div className="h-[400px]   mx-2 rounded-3xl mb-10 bg-black bg-opacity-80">
      <Swiper className="mySwiper w-full h-full">
        {slide.map((sld, i) => {
          return (
            <SwiperSlide key={i} className="h-full mx-2 w-full">
              <Slide info={sld}></Slide>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
