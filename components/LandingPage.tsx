import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { dataSate } from "../state/blogState";
import LandingGrid from "./GridPages/LandingGrid";
import Header from "./Header/Header";
import Slider from "./LandingSwiper/Slider";
import Navbar from "./NavBar/Navbar";
const LandingPage = () => {
  const [data, setData] = useRecoilState(dataSate);
  const [slide, setSlide] = useState(data.filter((dat) => dat.rating > 1000));
  useEffect(() => {}, [slide]);
  return (
    <div className="bg-[#030203]   min-h-[100vh] relative">
      <div className="bg-[#2d5886] rounded-full fixed -top-10  right-10 h-[180px] w-[250px] md:h-[200px] md:w-[300px] lg:h-[250px] lg:w-[400px]"></div>
      <div className="bg-[#2E3980] rounded-full fixed bottom-10  -left-10 h-[200px] w-[200px] md:h-[250px] md:w-[250px] lg:h-[400px] lg:w-[400px]"></div>
      <div className="fixed w-full h-full bg-[#030203] bg-opacity-5 backdrop-blur-[100px]"></div>
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="relative mt-[100px]">
        <Header></Header>
      </div>
      <div className="relative w-full overflow-hidden">
        <Slider slid={slide}></Slider>
      </div>
      <div className="relative">
        <LandingGrid></LandingGrid>
      </div>
    </div>
  );
};

export default LandingPage;
