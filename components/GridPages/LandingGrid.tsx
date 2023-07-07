import {
  ChakraProvider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useEffect } from "react";
import theme from "../UITheme";
import { GridTiles1, GridTiles2, GridTiles3 } from "./GridTiles";
/*
DATAFETCH

*/
const data = [
  [
    {
      tl: "1",
      tag: "POPULAR",
      title: "State of mobile apps",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
      img: "https://nhhfwmgerhjxhljmmeii.supabase.co/storage/v1/object/public/blogImage/postimg.svg",
      tagimg: "",
      by: "Harsh",
      des: "Web developer",
      hash: ["tech", "web", "mobile", "trends"],
    },
    {
      tl: "2",
      tag: "POPULAR",
      title: "State of mobile apps",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
      img: "https://nhhfwmgerhjxhljmmeii.supabase.co/storage/v1/object/public/blogImage/postimg.svg",
      tagimg: "",
      by: "Harsh",
      des: "Web developer",
      hash: ["tech", "web", "mobile", "trends"],
    },
    {
      tl: "3",
      tag: "POPULAR",
      title: "State of mobile apps",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
      img: "https://nhhfwmgerhjxhljmmeii.supabase.co/storage/v1/object/public/blogImage/postimg.svg",
      tagimg: "",
      by: "Harsh",
      des: "Web developer",
      hash: ["tech", "web", "mobile", "trends"],
    },
  ],
  [
    {
      tl: "2",
      tag: "POPULAR",
      title: "State of mobile apps",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
      img: "https://nhhfwmgerhjxhljmmeii.supabase.co/storage/v1/object/public/blogImage/postimg.svg",
      tagimg: "",
      by: "Harsh",
      des: "Web developer",
      hash: ["tech", "web", "mobile", "trends"],
    },
    {
      tl: "1",
      tag: "POPULAR",
      title: "State of mobile apps",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
      img: "https://nhhfwmgerhjxhljmmeii.supabase.co/storage/v1/object/public/blogImage/postimg.svg",
      tagimg: "",
      by: "Harsh",
      des: "Web developer",
      hash: ["tech", "web", "mobile", "trends"],
    },
    {
      tl: "3",
      tag: "POPULAR",
      title: "State of mobile apps",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
      img: "https://nhhfwmgerhjxhljmmeii.supabase.co/storage/v1/object/public/blogImage/postimg.svg",
      tagimg: "",
      by: "Harsh",
      des: "Web developer",
      hash: ["tech", "web", "mobile", "trends"],
    },
  ],
  [
    {
      tl: "1",
      tag: "POPULAR",
      title: "State of mobile apps",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
      img: "https://nhhfwmgerhjxhljmmeii.supabase.co/storage/v1/object/public/blogImage/postimg.svg",
      tagimg: "",
      by: "Harsh",
      des: "Web developer",
      hash: ["tech", "web", "mobile", "trends"],
    },
    {
      tl: "3",
      tag: "POPULAR",
      title: "State of mobile apps",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
      img: "https://nhhfwmgerhjxhljmmeii.supabase.co/storage/v1/object/public/blogImage/postimg.svg",
      tagimg: "",
      by: "Harsh",
      des: "Web developer",
      hash: ["tech", "web", "mobile", "trends"],
    },
    {
      tl: "2",
      tag: "POPULAR",
      title: "State of mobile apps",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste!",
      img: "https://nhhfwmgerhjxhljmmeii.supabase.co/storage/v1/object/public/blogImage/postimg.svg",
      tagimg: "",
      by: "Harsh",
      des: "Web developer",
      hash: ["tech", "web", "mobile", "trends"],
    },
  ],
];
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
const LandingGrid = () => {
  return (
    <div className="w-full  px-10">
      <ChakraProvider theme={theme}>
        <Tabs>
          <TabList>
            <Tab>Trending</Tab>
            <Tab>Latest</Tab>
            <Tab>Featured</Tab>
          </TabList>
          <TabPanels>
            <TabPanel className="h-full w-full">
              <Grid slides={data[0]}></Grid>
            </TabPanel>
            <TabPanel className="h-full w-full">
              <Grid slides={data[1]}></Grid>
            </TabPanel>
            <TabPanel className="h-full w-full">
              <Grid slides={data[0]}></Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ChakraProvider>
    </div>
  );
};

export default LandingGrid;
