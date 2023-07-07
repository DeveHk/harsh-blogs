import { useState } from "react";
import {
  AiFillDashboard,
  AiFillMessage,
  AiOutlineSearch,
} from "react-icons/ai";
const Header = () => {
  const [inp, setInp] = useState<boolean>(false);
  return (
    <div className="grid-cols-6 grid w-full h-[60vh]">
      <div className="hidden md:col-span-1 md:flex justify-end items-center   ">
        <AiFillMessage className="h-10 w-10 text-red-200 shadow-sm"></AiFillMessage>
      </div>
      <div className="col-span-6 flex flex-col justify-center space-y-8  md:col-span-4 bg-transparent">
        <div className="w-full flex justify-center items-center flex-col">
          <div className="text-3xl font-semibold bg-gradient-to-t from-[#377EE3] text-transparent bg-clip-text to-[#4894ff]">
            Latest Blogs
          </div>
          <div className="text-3xl font-semibold text-white ">
            World Updates
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col">
          <div className="text-xs text-gray-300 font-sans">
            Blogs on Everything new I learn in my daily life
          </div>
          <div className="text-xs text-gray-300 font-sans ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>

        <div className="w-full flex justify-center items-center flex-col">
          {/**SEARCH FUNTIONALITY TO BE */}
          <div className="w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-[40px] relative overflow-hidden rounded-2xl">
            <div className="bg-white absolute -bottom-4 left-5 w-5 h-5"></div>
            <div
              className={`${
                inp ? "border border-slate-600" : ""
              } w-full h-full bg-slate-600 rounded-2xl bg-opacity-10 backdrop-blur-[20px] flex justify-center items-center space-x-2  `}
            >
              <AiOutlineSearch className="h-7 w-7 text-blue-800"></AiOutlineSearch>
              <input
                type="text"
                placeholder="Search"
                className="w-[80%] bg-transparent font-sans focus:outline-0"
                name=""
                id=""
                onBlur={() => setInp(false)}
                onFocus={() => setInp(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:col-span-1 md:flex justify-start items-start  ">
        <AiFillDashboard className="h-10 w-10 text-purple-800 shadow-sm"></AiFillDashboard>
      </div>
    </div>
  );
};

export default Header;
