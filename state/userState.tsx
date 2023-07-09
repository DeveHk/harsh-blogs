import { atom, useRecoilState } from "recoil";

export const userState = atom({
  key: "userState", // unique ID (with respect to other atoms/selectors)
  default: null,
});
export const useUserState = () => useRecoilState(userState);
