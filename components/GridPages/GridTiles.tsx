import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
interface Props {
  date: string;
  desc: string;
  event_id: string;
  event_name: string;
  form_question: string[];
  instagram: string;
  poc: any;
  poster: string;
  prize_pool: number;
  rules: string[];
  ticket: string;
  soc_id: string;
  tagline: string;
  team_size: number;
  time: string;
  venue: string;
}
const GridTiles2 = ({ data, maxlen }: any) => {
  const [focused, setFocused] = useState(false);
  return (
    <Link href={{ pathname: `/blogs/${data.id}` }}>
      <div
        onMouseOver={() => {
          setFocused(true);
        }}
        onMouseLeave={() => {
          setFocused(false);
        }}
        className={`first-letter:max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 m-7 rounded-3xl transition-[transform,_box-shadow] duration-100 ${
          focused
            ? "scale-[1.025] cursor-pointer shadow-xl shadow-slate-900"
            : "scale-100"
        }`}
      >
        <div className="overflow-hidden  rounded-3xl">
          <div className="max-h-[220px] overflow-hidden">
            <Image
              className="w-full h-full  "
              width={100}
              height={100}
              src={data.img}
              alt=""
            />
          </div>
          <div className="p-5">
            <div className="">
              <h5 className="mb-2 text-2xl font-serif  tracking-wide text-gray-900 dark:text-white">
                {data.title}
              </h5>
            </div>
            <div className="bg-blue-600 bg-opacity-20 text-gray-400 font-sans text-sm inline-flex px-8">
              New
            </div>
            <div className="">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {data.content[0].slice(0, maxlen || 180)}...
              </p>
            </div>
            <div className="flex flex-wrap">
              {data.hash.slice(0, 5).map((word: any, i: any) => {
                return (
                  <div
                    className=" m-1 mt-2 bg-red-600 bg-opacity-25 rounded-2xl text-gray-400 font-sans text-xs px-2 flex flex-wrap"
                    key={i}
                  >
                    #{word}
                  </div>
                );
              })}
            </div>
            <div className=" w-full flex items-center justify-between ">
              <div className="flex flex-col ">
                <div className="text-gray-300 border-b-[0.2px]">{data.by}</div>
                <div className="text-gray-400 text-sm ">{data.des}</div>
              </div>
              <div className="inline-flex items-center px-2 py-1 h-8 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
const GridTiles1 = ({ data, maxlen }: any) => {
  const [focused, setFocused] = useState(false);
  return (
    <Link href={{ pathname: `/blogs/${data.id}` }}>
      <div
        onMouseOver={() => {
          setFocused(true);
        }}
        onMouseLeave={() => {
          setFocused(false);
        }}
        className={`max-w-sm transition-[transform,_box-shadow] duration-100  px-2  shadow m-7 rounded-3xl ${
          focused
            ? "scale-[1.025] cursor-pointer shadow-xl shadow-slate-950"
            : "scale-100"
        }`}
      >
        <div className="overflow-hidden  rounded-3xl">
          <div className="max-h-[220px] overflow-hidden rounded-3xl">
            <Image
              className="w-full h-full  "
              width={100}
              height={100}
              src={data.img}
              alt=""
            />
          </div>
          <div className="py-5">
            <div className="bg-green-600 bg-opacity-10 text-gray-500 font-sans text-sm inline-flex px-8">
              Trending
            </div>
            <div className="">
              <h5 className="mb-2 text-xl font-serif  tracking-wide text-gray-900 dark:text-white">
                {data.title}
              </h5>
            </div>
            <div className="">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {data.content[0].slice(0, maxlen || 180)}...
              </p>
            </div>
            <div className=" w-full flex items-center flex-row-reverse justify-between ">
              <div className="flex flex-col  ">
                <div className="text-gray-300 ">{data.by}</div>
                <div className="text-gray-400 text-sm ">{data.des}</div>
              </div>
              <div className="inline-flex items-center px-2 py-1 h-8 text-sm font-medium text-center text-white bg-opacity-10 bg-blue-700 cursor-pointer rounded-lg ">
                Read more
              </div>
            </div>
            <div className="flex flex-wrap">
              {data.hash.slice(0, 5).map((word: any, i: any) => {
                return (
                  <div
                    className=" m-1 mt-2 bg-blue-600 bg-opacity-25 rounded-2xl text-gray-400 font-sans text-xs px-2 "
                    key={i}
                  >
                    #{word}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
const GridTiles3 = ({ data, maxlen }: any) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative">
      <div
        className={`flex justify-center flex-col items-center absolute  top-0 h-full w-full p-7 `}
      >
        <div className="bg-gradient-to-l  from-[#c29109] to-[#d9b58f] rounded-full h-32 w-32 "></div>
      </div>

      <Link href={{ pathname: `/blogs/${data.id}` }}>
        <div
          onMouseOver={() => {
            setFocused(true);
          }}
          onMouseLeave={() => {
            setFocused(false);
          }}
          className={`max-w-sm transition-[transform,_box-shadow] duration-100 bg-opacity-30 backdrop-blur-[90px]   shadow bg-gray-800  m-7 rounded-3xl ${
            focused
              ? "scale-[1.025] cursor-pointer shadow-xl shadow-slate-950"
              : "scale-100"
          }`}
        >
          <div className="overflow-hidden  rounded-3xl">
            <div className="p-5">
              <h5 className="mb-2 text-xl font-serif  tracking-wide text-gray-900 dark:text-white">
                {data.title}
              </h5>
              <div className="bg-yellow-600 bg-opacity-20 text-gray-400 font-sans text-sm inline-flex px-8">
                Recommended
              </div>
            </div>
            <div className="max-h-[220px] overflow-hidden">
              <Image
                className="w-full h-full  "
                width={100}
                height={100}
                src={data.img}
                alt=""
              />
            </div>
            <div className="p-5">
              <div className="">
                <p className=" font-normal text-gray-700 dark:text-gray-400">
                  {data.content[0].slice(0, maxlen || 180)}...
                </p>
              </div>
              <div className="text-blue-500 mb-3 font-sans text-xs">
                View More
              </div>
              <div className="flex flex-wrap">
                {data.hash.slice(0, 5).map((word: any, i: any) => {
                  return (
                    <div
                      className=" m-1 mt-2 bg-yellow-600 bg-opacity-25 rounded-2xl text-gray-400 font-sans text-xs px-2 flex "
                      key={i}
                    >
                      #{word}
                    </div>
                  );
                })}
              </div>
              <div className=" w-full flex items-center justify-center bg-black rounded-3xl mt-4 bg-opacity-25 py-1 text-center">
                <div className="flex flex-col ">
                  <div className="text-gray-300 ">{data.by}</div>
                  <div className="text-gray-400 text-sm ">{data.des}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export { GridTiles1, GridTiles2, GridTiles3 };
/**
 * <div className="p-5">
        <a href="#">
          
        </a>
       
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
 */
