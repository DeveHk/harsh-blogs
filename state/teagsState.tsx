import { atom } from "recoil";

import { tags } from "./data";
export const tagState = atom({
  key: "tagState",
  default: tags,
});
