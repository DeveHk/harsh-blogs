import { atom, useRecoilState } from "recoil";

import { trueData } from "./data";
export const dataSate = atom({
  key: "dataSate", // unique ID (with respect to other atoms/selectors)
  default: trueData,
});
export const useGlobalState = () => useRecoilState(dataSate);
