import {
  ChakraProvider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { dataSate } from "../../state/blogState";
import theme from "../UITheme";
import Grid from "./Grid";
/*
DATAFETCH

*/

const LandingGrid = () => {
  const [data, setData] = useRecoilState(dataSate);
  const [trend, useTrend] = useState(data.filter((dat) => dat.type == "T"));
  const [latest, useLatest] = useState(data.filter((dat) => dat.type == "N"));
  const [feature, useFeature] = useState(data.filter((dat) => dat.type == "F"));
  useEffect(() => {
    console.log(trend);
  }, [latest, feature, trend]);
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
              <Grid slides={trend}></Grid>
            </TabPanel>
            <TabPanel className="h-full w-full">
              <Grid slides={latest}></Grid>
            </TabPanel>
            <TabPanel className="h-full w-full">
              <Grid slides={feature}></Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ChakraProvider>
    </div>
  );
};

export default LandingGrid;
