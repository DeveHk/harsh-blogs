import { GridTiles1, GridTiles2, GridTiles3 } from "./GridTiles";

const Grid = ({ slides }: any) => {
  return (
    <div className="w-full min-h-[300px]  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
      {slides.map((sld: any, i: any) => {
        if (sld.tl == "1")
          return (
            <div className="flex justify-center">
              <GridTiles1 data={sld} key={i}></GridTiles1>
            </div>
          );
        if (sld.tl == "2")
          return (
            <div className="flex justify-center">
              <GridTiles2 data={sld} key={i}></GridTiles2>
            </div>
          );
        if (sld.tl == "3")
          return (
            <div className="flex justify-center">
              <GridTiles3 data={sld} key={i}></GridTiles3>
            </div>
          );
      })}
    </div>
  );
};

export default Grid;
