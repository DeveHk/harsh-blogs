import Image from "next/image";

const Blog = ({ page }: any) => {
  return (
    <div className="mx-14 sm:mx-20 md:mx-36 lg:mx-56 xl:mx-72 pb-10">
      {page && (
        <div className="">
          <div className="text-white font-semibold text-5xl md:text-7xl lg:text-8xl">
            {page.title}
          </div>
          <div className="font-sans inline-block text-lg mt-5 bg-white bg-opacity-10 px-2 text-gray-400 rounded-lg italic">
            {page.tag}
          </div>
        </div>
      )}
      {page && (
        <div className="">
          <div className="mt-5">
            <div className="col-span-1 max-h-[500px]  w-full flex justify-center p-5 items-end overflow-hidden">
              <Image
                className="w-full h-full rounded-xl"
                width={100}
                height={100}
                src={page.img}
                alt=""
              />
            </div>
          </div>
          <div className="text-gray-300">{page.tagLine}</div>
          <div className="">
            {page.content.map((para: any, i: any) => {
              return (
                <div className="text-gray-200 font-sans mt-5 px-3" key={i}>
                  <div className="">{para}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="">
        <div className="flex flex-wrap mt-10">
          {page.hash.map((word: any, i: any) => {
            return (
              <div
                className=" m-1  bg-blue-600 bg-opacity-25 rounded-2xl text-gray-400 font-sans text-xs px-2 "
                key={i}
              >
                #{word}
              </div>
            );
          })}
        </div>
        <div className="flex mt-5">
          <div className="bg-gradient-to-t rounded-full h-10 w-10 from-red-500 to-red-300"></div>
          <div className="ml-5">
            <div className="text-white opacity-60 font-sans">{page.by}</div>
            <div className="text-gray-500 font-sans text-xs">{page.des}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
