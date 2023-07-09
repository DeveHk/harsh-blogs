import { useEffect } from "react";
import { useUserState } from "../state/userState";

const useUser = () => {
  const [data, setData] = useUserState();
  useEffect(() => {
    try {
      const storedState = localStorage.getItem("currentUserData");
      if (storedState) {
        setData(JSON.parse(storedState));
      }
      console.log(storedState);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [data, setData]);

  return [data, setData];
};
export default useUser;
