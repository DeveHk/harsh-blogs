import { useGlobalState } from "../../state/blogState";
//import { GridTiles1, GridTiles2, GridTiles3 } from "../GridPages/GridTiles";
const LoginInfo = () => {
  const [data, setData] = useGlobalState();
  console.log(data);
  return (
    <div className="  flex justify-center py-10 w-full">
      <div className="max-w-[400px] ml-20 lg:max-w-[600px] lg:ml-32">
        <h5 className="mb-2 text-4xl font-serif  tracking-wide text-gray-200">
          Welcome to the awsome world of blogs..
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 pl-5 mt-10">
          Start Your Journey as a Blogger with on our website.. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Cum delectus magnam,
          natus quas nesciunt quasi eveniet maiores sequi incidunt quos.
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 pr-5 mt-10">
          Start Your Journey as a Blogger with on our website.. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Cum delectus magnam,
          natus quas nesciunt quasi eveniet maiores sequi incidunt quos.
        </p>
      </div>
    </div>
  );
};

export default LoginInfo;
/**
 *  <div className="hidden lg:flex max-w-[500px] xl:max-w-none ">
          <Marquee>
            {data.map((sld: any, i: any) => {
              if (sld.tl == "1")
                return (
                  <div
                    className="flex 
                  
                  justify-center w-[200px]"
                  >
                    <GridTiles1 data={sld} maxlen={50} key={i}></GridTiles1>
                  </div>
                );
              if (sld.tl == "2")
                return (
                  <div className="flex justify-center w-[200px]">
                    <GridTiles2 data={sld} maxlen={50} key={i}></GridTiles2>
                  </div>
                );
              if (sld.tl == "3")
                return (
                  <div className="flex justify-center w-[200px]">
                    <GridTiles3 data={sld} maxlen={50} key={i}></GridTiles3>
                  </div>
                );
            })}
          </Marquee>
        </div>
 */
