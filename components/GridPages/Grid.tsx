import { useEffect } from "react";
import { GridTiles1, GridTiles2, GridTiles3 } from "./GridTiles";

const Grid = ({ slides }: any) => {
  useEffect(() => {
    console.log(slides);
  });

  return (
    <div className="w-full min-h-[300px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
      {slides.map((sld: any, i: any) => {
        if (sld.tl == "1") return <GridTiles1 data={sld} key={i}></GridTiles1>;
        if (sld.tl == "2") return <GridTiles2 data={sld} key={i}></GridTiles2>;
        if (sld.tl == "3") return <GridTiles3 data={sld} key={i}></GridTiles3>;
      })}
    </div>
  );
};

export default Grid;
