import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";

/**
 *
 * DATAFETCH
 * need preview of blogs here
 */
const Slider = ({ slid }: any) => {
  return (
    <div className="h-[600px] sm:h-[400px]    rounded-3xl mb-10 bg-black bg-opacity-80">
      <Swiper className="mySwiper w-full h-full">
        {slid.map((sld: any, i: any) => {
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
