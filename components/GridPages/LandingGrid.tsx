import {
  ChakraProvider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import theme from "../UITheme";
import { data } from "../data";
import Grid from "./Grid";
/*
DATAFETCH

*/

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
