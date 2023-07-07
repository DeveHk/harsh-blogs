import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";
const slide = [
  {
    title: "state of mobile apps",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
    img: "slide1",
    tagimg: "",
    by: "Harsh",
    des: "Web developer",
  },
];
const Slide = ({ info }: any) => {
  useEffect(() => {
    console.log(info);
  });
  return (
    <Link
      href={{ pathname: `/blogs/${info.id}` }}
      className="w-full h-full  cursor-pointer"
    >
      <div className=" grid sm:grid-cols-3 grid-cols-1  w-full h-full py-10 px-5">
        <div className="col-span-1  w-full flex justify-center p-5 items-end overflow-hidden">
          <Image
            className="w-full h-full rounded-xl"
            width={100}
            height={100}
            src={info.img}
            alt=""
          />
        </div>
        <div className="sm:col-span-2 px-5  flex flex-col justify-center items-start ">
          <div className="font-sans  bg-white bg-opacity-10 px-2 text-gray-400 rounded-lg">
            {info.tag}
          </div>
          <div className="text-white mt-5 text-3xl md:text-5xl">
            {info.title}
          </div>
          <div className="text-gray-500 mt-3 text-sm">
            {info.content[0].slice(0, 250)}..
          </div>
          <div className="flex mt-5">
            <div className="bg-gradient-to-t rounded-full h-10 w-10 from-red-500 to-red-300"></div>
            <div className="ml-5">
              <div className="text-white opacity-60 font-sans">{info.by}</div>
              <div className="text-gray-500 font-sans text-xs">{info.des}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Slide;
