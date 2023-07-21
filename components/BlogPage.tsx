import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { dataSate } from "../state/blogState";
import { tagState } from "../state/teagsState";
import Grid from "./GridPages/Grid";
import Slider from "./LandingSwiper/Slider";
import Navbar from "./NavBar/Navbar";
interface propType {
  tags: string;
}
const BlogPage = ({ tags }: propType) => {
  const [data, setData] = useRecoilState(dataSate);
  const [tag, setTag] = useRecoilState(tagState);
  console.log(data);
  const blogtile = data.filter(
    (dat) => dat.domain == tags
    /*for (let i = 0; i < dat.hash.length; i++) {
      if (tag[tags].includes(dat.hash[i]) == true) return true;
    }
    return false;*/
  );
  const slide = blogtile.filter((dat) => dat.rating > 1000);

  useEffect(() => {
    console.log(blogtile);
  }, [blogtile, slide]);
  return (
    <div className="bg-[#030203]   min-h-[100vh] relative">
      <div className="bg-[#2d5886] rounded-full fixed -top-10  right-10 h-[180px] w-[250px] md:h-[200px] md:w-[300px] lg:h-[250px] lg:w-[400px]"></div>
      <div className="bg-[#2E3980] rounded-full fixed bottom-10  -left-10 h-[200px] w-[200px] md:h-[250px] md:w-[250px] lg:h-[400px] lg:w-[400px]"></div>
      <div className="fixed w-full h-full bg-[#030203] bg-opacity-5 backdrop-blur-[100px]"></div>
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="relative w-full overflow-hidden mt-20">
        {slide && <Slider slid={slide}></Slider>}
      </div>
      <div className="relative ">
        <Grid slides={blogtile}></Grid>
      </div>
    </div>
  );
};

export default BlogPage;
